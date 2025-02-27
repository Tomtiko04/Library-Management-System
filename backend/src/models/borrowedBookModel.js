const mongoose = require('mongoose');

const borrowedBookModelSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	book: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Book",
		required: true,
	},
	borrowedAt: {
		type: Date,
		default: Date.now,
	},
	dueDate: {
		type: Date,
		required: true,
	},
	renewalCount: {
		type: Number,
		default: 0,
	},
	status: {
		type: String,
		enum: ["borrowed", "returned"],
        default: "borrowed",
	},
}, { timestamps: true });

module.exports = mongoose.model("BorrowedBook", borrowedBookModelSchema);