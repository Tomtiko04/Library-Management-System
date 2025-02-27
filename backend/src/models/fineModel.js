const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema({
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
	amount: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ["pending", "paid"],
		default: "pending",
	},
	dueDate: {
		type: Date,
		required: true
	}
}, { timestamps: true });

const Fine = mongoose.model("Fine", fineSchema);

module.exports = Fine;
