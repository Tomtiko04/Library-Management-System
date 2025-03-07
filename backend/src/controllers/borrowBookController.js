const BorrowedBook = require("../models/borrowedBookModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel");
const Fine = require("../models/fineModel");

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
