const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		libraryId: {
			type: String,
			sparse: true,
		},
		role: {
			type: String,
			enum: ["underGraduate", "postGraduate", "librarian", "admin"],
			// default: "underGraduate",
			required: true,
		},
		borrowerTickets: {
			type: Number,
			default: function () {
				return this.role === "underGraduate" ? 2 : this.role === "postGraduate" ? 4 : 0;
			},
		},
		fines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fine" }],
		borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "BorrowedBook" }],
	},
	{ timestamps: true }
);

// UserSchema.pre(/^find/, function (next) {
// 	this.find({
// 		role: { $ne: "admin" },
// 	});

// 	next();
// });

const User = mongoose.model("User", UserSchema);

module.exports = User;
