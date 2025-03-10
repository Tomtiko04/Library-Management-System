const mongoose = require("mongoose");

const fineSchema = new mongoose.Schema(
	{
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
			enum: ["unpaid", "paid"],
			default: "unpaid",
		},
		paymentDate: { type: Date },
	},
	{ timestamps: true }
);

const Fine = mongoose.model("Fine", fineSchema);

module.exports = Fine;
