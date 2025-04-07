const mongoose = require("mongoose");

const waitlistSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
	joinedAt: { type: Date, default: Date.now },
	notifiedAt: { type: Date },
	status: {
		type: String,
		enum: ["waiting", "notified", "expired", "borrowed"],
		default: "waiting",
	},
});

module.exports = mongoose.model("Waitlist", waitlistSchema);
