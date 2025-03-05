const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		libraryId: { type: String, unique: true, sparse: true }, // Only for students
		role: {
			type: String,
			enum: ["student", "librarian", "admin"],
			default: "student",
		},
		fines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fine" }],
		borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "BorrowedBook" }],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
