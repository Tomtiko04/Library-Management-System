const BorrowedBook = require("../models/borrowedBookModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel");
const Fine = require("../models/fineModel");
const { notifyNextUser } = require("../controllers/notificationController");

// Borrow a Book
exports.borrowBook = async (req, res) => {
	try {
		const { bookId } = req.body;
		const user = await User.findById(req.user.id);
		const book = await Book.findById(bookId);

		if (!user) return res.status(404).json({ message: "User not found" });
		if (!book) return res.status(404).json({ message: "Book not found" });

		// ✅ Check if the user has already borrowed this book
		const alreadyBorrowed = await BorrowedBook.findOne({
			user: user._id,
			book: book._id,
			status: "borrowed",
		});

		if (alreadyBorrowed) {
			return res.status(400).json({
				message: "You have already borrowed this book. Please return it before borrowing again.",
			});
		}

		// ✅ Check if user has unpaid fines before borrowing
		const hasUnpaidFines = await Fine.findOne({ user: user._id, status: "unpaid" });
		if (hasUnpaidFines) {
			return res
				.status(400)
				.json({ message: "You have unpaid fines. Please pay before borrowing more books." });
		}

		// Borrowing limits based on user role
		const borrowingLimits = {
			underGraduate: 2,
			postGraduate: 4,
			faculty: 4,
			nonTeachingStaff: 4,
			researcher: 4,
		};

		// Check if user has enough tickets
		if (user.borrowerTickets <= 0) {
			return res.status(400).json({
				message: "You have no available borrower tickets. Return a book to borrow another.",
			});
		}

		// Check if the book is available
		if (book.availableCopies <= 0) {
			return res.status(400).json({ message: "No copies of this book are currently available." });
		}

		// Assign due date based on role
		const loanDuration = user.role === "underGraduate" ? 7 : 14; // 7 days for undergrads, 14 days for others
		const dueDate = new Date();
		dueDate.setDate(dueDate.getDate() + loanDuration);

		// Create a new borrowed book entry
		const borrowedBook = new BorrowedBook({
			user: user._id,
			book: book._id,
			borrowedDate: new Date(),
			dueDate,
		});

		// Reduce available copies and borrower tickets
		book.availableCopies -= 1;
		user.borrowerTickets -= 1;
		user.borrowedBooks.push(borrowedBook._id); // ✅ Add book to user's borrowed list
		user.borrowingHistory.push(borrowedBook._id); // ✅ Add book to user's borrowed history)

		await borrowedBook.save();
		await book.save();
		await user.save();

		res.status(201).json({
			message: "Book borrowed successfully",
			borrowedBook,
			remainingTickets: user.borrowerTickets,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// ✅ Get All Borrowed Books (For Admins & Librarians)
exports.getAllBorrowedBooks = async (req, res) => {
	try {
		const borrowedBooks = await BorrowedBook.find().populate("user book");

		res.status(200).json({ result: borrowedBooks.length, borrowedBooks });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// ✅ Get User Borrowing History
exports.getUserBorrowingHistory = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).populate("borrowingHistory");

		res.status(200).json({ borrowingHistory: user.borrowingHistory });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// ✅ Renew Borrowed Book
exports.renewBook = async (req, res) => {
	try {
		const { bookId } = req.body;
		const user = await User.findById(req.user.id);
		const borrowedBook = await BorrowedBook.findOne({
			user: user._id,
			book: bookId,
			status: "borrowed",
		});

		if (!user) return res.status(404).json({ message: "User not found" });
		if (!borrowedBook)
			return res
				.status(400)
				.json({ message: "You have not borrowed this book or it's already returned" });

		// ✅ Check if the book is already overdue
		const today = new Date();
		if (borrowedBook.dueDate < today) {
			return res
				.status(400)
				.json({ message: "Cannot renew an overdue book. Please return it first and clear fines." });
		}

		// ✅ Restrict renewal: Only allowed within 3 days of due date
		const daysBeforeRenewal = 3;
		const daysLeft = Math.ceil((borrowedBook.dueDate - today) / (1000 * 60 * 60 * 24));

		if (daysLeft > daysBeforeRenewal) {
			return res
				.status(400)
				.json({ message: `You can only renew within ${daysBeforeRenewal} days of the due date.` });
		}

		// ✅ Check if the user has already renewed this book twice
		if (borrowedBook.renewals >= 2) {
			return res.status(400).json({ message: "Maximum renewal limit reached for this book." });
		}

		// ✅ Extend due date based on role
		const renewalPeriod = user.role === "underGraduate" ? 7 : 14;
		borrowedBook.dueDate.setDate(borrowedBook.dueDate.getDate() + renewalPeriod);
		borrowedBook.renewals += 1;

		await borrowedBook.save();

		res.status(200).json({
			message: "Book renewed successfully",
			renewedBook: borrowedBook,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// ✅ Return Borrowed Book
exports.returnBook = async (req, res) => {
	try {
		const { bookId } = req.body;
		const user = await User.findById(req.user.id);
		const borrowedBook = await BorrowedBook.findOne({
			user: user._id,
			book: bookId,
			status: "borrowed",
		}).populate("book");

		if (!user) return res.status(404).json({ message: "User not found" });
		if (!borrowedBook)
			return res
				.status(400)
				.json({ message: "You have not borrowed this book or it's already returned" });

		// ✅ Check if the book is overdue
		const today = new Date();
		const dueDate = borrowedBook.dueDate;
		let fine = 0;

		if (today > dueDate) {
			// Calculate the number of overdue days (excluding weekends)
			let overdueDays = 0;
			let currentDate = new Date(dueDate);

			while (currentDate < today) {
				currentDate.setDate(currentDate.getDate() + 1);
				const dayOfWeek = currentDate.getDay();
				if (dayOfWeek !== 0 && dayOfWeek !== 6) {
					// Exclude Saturday (6) and Sunday (0)
					overdueDays++;
				}
			}
			fine = overdueDays * 100;
		}

		// ✅ If there is a fine, store it in the User model
		if (fine > 0) {
			user.fines.push({ amount: fine, book: bookId, status: "unpaid" });
		}

		// ✅ Update book copies
		const book = await Book.findById(bookId);
		book.availableCopies += 1;
		await book.save();

		// ✅ Remove book from user's borrowed books
		user.borrowedBooks = user.borrowedBooks.filter((b) => b.toString() !== bookId);
		user.borrowerTickets += 1; // Restore a borrow ticket

		// ✅ Mark the book as returned
		borrowedBook.status = "returned";
		await borrowedBook.save();
		await user.save();

		await notifyNextUser(returnedBook._id);

		res.status(200).json({
			message: "Book returned successfully",
			fine: fine > 0 ? `₦${fine} overdue fine applied` : "No fine",
		});
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};