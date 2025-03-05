const User = require("../models/userModel.js");

// Get All Users (Admin Only)
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find().select("-password");
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Get Logged-in User Profile
exports.getUserProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Promote User to Librarian (Admin Only)
exports.promoteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: "User not found" });

		user.role = "librarian";
		await user.save();

		res.json({ message: "User promoted to librarian", user });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};