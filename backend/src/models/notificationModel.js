const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		message: { type: String, required: true },
		type: { type: String, enum: ["dueDateReminder", "overdueFine"], required: true },
		status: { type: String, enum: ["unread", "read"], default: "unread" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);