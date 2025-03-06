const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Book title is required"],
		},
		author: {
			type: String,
			required: [true, "Author name is required"],
		},
		isbn: { type: String, unique: true, required: true },
		category: {
			type: String,
			required: [true, "Book category is required"],
		},
		publishedYear: { type: Number, required: true },
		totalCopies: { type: Number, required: true },
		availableCopies: { type: Number, required: true },
		createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin/Librarian who added it
		availability: {
			type: Boolean,
			default: true,
		},
		// dueDate: {
		// 	type: Number,
		// 	default: 14,
		// },
		// loanPeriod: {
		// 	type: Number,
		// 	default: 14,
		// },
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
