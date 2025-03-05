const Book = require("../models/BookModel");
const csvParser = require("csv-parser");
const fs = require("fs");


exports.getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json({
			status: "success",
			results: books.length,
			data: {
				books,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: error.message,
		});
	}
};

exports.getBookById = async (req, res) => {
	try {
		const book = await Book.findById(req.params.bookId);
		if (!book) {
			return res.status(404).json({
				status: "error",
				message: "Book not found",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				book,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: error.message,
		});
	}
};

// exports.createBook = async (req, res) => {
// 	const { title, author, category, loanPeriod } = req.body;
// 	if (!title || !author || !category) {
// 		return res.status(400).json({ message: "Title, author, and category are required" });
// 	}

// 	try {
// 		const book = await Book.create(req.body);
// 		res.status(201).json({
// 			status: "success",
// 			data: {
// 				book,
// 			},
// 		});

// 		res.status(201).json({ message: "Book added successfully", book });
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// };

exports.createBook = async (req, res) => {
	try {
		const { title, author, category, loanPeriod } = req.body;

		if (!title || !author || !category) {
			return res.status(400).json({ message: "Title, author, and category are required" });
		}

		const book = new Book({
			title,
			author,
			category,
			loanPeriod: loanPeriod || 14, // Default loan period is 14 days
		});

		await book.save();
		res.status(201).json({ message: "Book added successfully", book });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Bulk Import Books (Admin & Librarian Only)
exports.bulkImportBooks = async (req, res) => {
	try {
		const books = req.body; // Expecting an array of book objects

		if (!Array.isArray(books) || books.length === 0) {
			return res.status(400).json({ message: "Invalid input. Provide an array of books." });
		}

		// Validate each book
		for (let book of books) {
			if (!book.title || !book.author || !book.category) {
				return res
					.status(400)
					.json({ message: "Each book must have a title, author, and category." });
			}
		}

		// Insert all books into the database
		const newBooks = await Book.insertMany(books);
		res.status(201).json({ message: "Books imported successfully", books: newBooks });
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};



// CSV Upload & Bulk Import
exports.importBooksFromCSV = async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ message: "Please upload a CSV file" });
		}

		const books = [];
		fs.createReadStream(req.file.path)
			.pipe(csvParser())
			.on("data", (row) => {
				if (row.title && row.author && row.category) {
					books.push({
						title: row.title,
						author: row.author,
						category: row.category,
						loanPeriod: row.loanPeriod ? parseInt(row.loanPeriod) : 14, // Default loan period: 14 days
					});
				}
			})
			.on("end", async () => {
				if (books.length === 0) {
					return res.status(400).json({ message: "No valid book entries found in CSV" });
				}

				// Insert books into database
				await Book.insertMany(books);
				res.status(201).json({ message: "Books imported successfully", books });
			});
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};


exports.updateBook = async (req, res) => {
	try {
		const updateBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({ message: "Book updated successfully", updateBook });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteBook = async (req, res) => {
	try {
		await Book.findByIdAndDelete(req.params.bookId);
		res.status(200).json({ message: "Book deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
