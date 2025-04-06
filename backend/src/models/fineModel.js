const mongoose = require("mongoose");

const FineSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
		amount: { type: Number, required: true },
		status: { type: String, enum: ["unpaid", "paid"], default: "unpaid" },
		paymentMethod: {
			type: String,
			enum: ["Flutterwave", "Manual", "Waived"],
			default: "Flutterwave",
		},
		transactionId: { type: String, unique: true, sparse: true }, // Store Flutterwave transaction ID
		paymentDate: { type: Date },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Fine", FineSchema);