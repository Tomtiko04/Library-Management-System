const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
        select: false,
	},
	role: {
		type: String,
		enum: ["student", "librarian", "admin"],
		default: "student",
	},
	fines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fine" }],
	borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "BorrowedBook" }],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
