const Book = require("../models/bookModel");
const APIFeatures = require("../utilis/apiFeatures");

// ✅ Create a Book (Admin/Librarian Only)
exports.createBook = async (req, res) => {
	try {
		const { title, author, isbn, category, publishedYear, totalCopies } = req.body;

		const existingBook = await Book.findOne({ isbn });
		if (existingBook)
			return res.status(400).json({ message: "Book with this ISBN already exists" });

		const book = new Book({
			title,
			author,
			isbn,
			category,
			publishedYear,
			totalCopies,
			availableCopies: totalCopies, // All copies are available initially
			createdBy: req.user.id,
		});

		await book.save();
		res.status(201).json({ message: "Book added successfully", book });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// ✅ Get All Books (Anyone)
exports.getAllBooks = async (req, res) => {
	try {
		const features = new APIFeatures(Book.find(), req.query)
			.search()
			.filter()
			.sort()
			.limitFields()
			.paginate();

		const books = await features.query;
		res.status(200).json({ result: books.length, books });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// ✅ Get a Single Book by ID (Anyone)
exports.getBookById = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);
		if (!book) return res.status(404).json({ message: "Book not found" });

		res.status(200).json({ book });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// ✅ Update a Book (Admin/Librarian Only)
exports.updateBook = async (req, res) => {
	try {
		const { title, author, category, publishedYear, totalCopies } = req.body;
		const book = await Book.findById(req.params.id);

		if (!book) return res.status(404).json({ message: "Book not found" });

		book.title = title || book.title;
		book.author = author || book.author;
		book.category = category || book.category;
		book.publishedYear = publishedYear || book.publishedYear;
		book.totalCopies = totalCopies || book.totalCopies;

		await book.save();
		res.json({ message: "Book updated successfully", book });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// ✅ Delete a Book (Admin/Librarian Only)
exports.deleteBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id);
		if (!book) return res.status(404).json({ message: "Book not found" });

		res.json({ message: "Book deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Bulk Import Books (Admin & Librarian Only)
// exports.bulkImportBooks = async (req, res) => {
// 	try {
// 		const books = req.body; // Expecting an array of book objects

// 		if (!Array.isArray(books) || books.length === 0) {
// 			return res.status(400).json({ message: "Invalid input. Provide an array of books." });
// 		}

// 		// Validate each book
// 		for (let book of books) {
// 			if (!book.title || !book.author || !book.category) {
// 				return res
// 					.status(400)
// 					.json({ message: "Each book must have a title, author, and category." });
// 			}
// 		}

// 		// Insert all books into the database
// 		const newBooks = await Book.insertMany(books);
// 		res.status(201).json({ message: "Books imported successfully", books: newBooks });
// 	} catch (error) {
// 		res.status(500).json({ message: "Server error", error });
// 	}
// };

// CSV Upload & Bulk Import
// exports.importBooksFromCSV = async (req, res) => {
// 	try {
// 		if (!req.file) {
// 			return res.status(400).json({ message: "Please upload a CSV file" });
// 		}

// 		const books = [];
// 		fs.createReadStream(req.file.path)
// 			.pipe(csvParser())
// 			.on("data", (row) => {
// 				if (row.title && row.author && row.category) {
// 					books.push({
// 						title: row.title,
// 						author: row.author,
// 						category: row.category,
// 						loanPeriod: row.loanPeriod ? parseInt(row.loanPeriod) : 14, // Default loan period: 14 days
// 					});
// 				}
// 			})
// 			.on("end", async () => {
// 				if (books.length === 0) {
// 					return res.status(400).json({ message: "No valid book entries found in CSV" });
// 				}

// 				// Insert books into database
// 				await Book.insertMany(books);
// 				res.status(201).json({ message: "Books imported successfully", books });
// 			});
// 	} catch (error) {
// 		res.status(500).json({ message: "Server error", error });
// 	}
// };
