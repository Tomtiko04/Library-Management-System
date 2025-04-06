const mongoose = require("mongoose");

const BorrowedBookSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Who borrowed the book
		book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true }, // The borrowed book
		borrowedDate: { type: Date, default: Date.now }, // Date the book was borrowed
		dueDate: { type: Date, required: true }, // When the book is due for return
		renewals: { type: Number, default: 0 }, // Number of times book has been renewed
		fine: { type: Number, default: 0 }, // Overdue fine, if applicable
		status: {
			type: String,
			enum: ["borrowed", "returned", "overdue"],
			default: "borrowed",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("BorrowedBook", BorrowedBookSchema);

// const mongoose = require('mongoose');

// const borrowedBookModelSchema = mongoose.Schema({
// 	user: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "User",
// 		required: true,
// 	},
// 	book: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "Book",
// 		required: true,
// 	},
// 	borrowedAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// 	dueDate: {
// 		type: Date,
// 		required: true,
// 	},
// 	renewalCount: {
// 		type: Number,
// 		default: 0,
// 	},
// 	status: {
// 		type: String,
// 		enum: ["borrowed", "returned"],
//         default: "borrowed",
// 	},
// }, { timestamps: true });

// module.exports = mongoose.model("BorrowedBook", borrowedBookModelSchema);
