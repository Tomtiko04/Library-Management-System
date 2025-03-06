const User = require("../models/userModel.js");

// Get All Users (Admin Only) -  Allows admins to manage users
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find({ role: { $ne: "admin" } }).select("-password");
		res.status(200).json({
			result: users.length,
			data: {
				users,
			},
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Get Logged-in User Profile (All users) - Users can update their name, email, or password
exports.getUserProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.status(200).json({
			data: {
				user,
			},
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update Logged-in User Profile
exports.updateUserProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.id);

		if (!user) return res.status(404).json({ message: "User not found" });

		const { name, email, password } = req.body;

		// Update fields only if they are provided
		if (name) user.name = name;
		if (email) user.email = email;

		if (password) {
			const hashedPassword = await bcrypt.hash(password, 10);
			user.password = hashedPassword;
		}

		await user.save();

		res.json({
			message: "Profile updated successfully",
			user: { id: user._id, name: user.name, email: user.email, role: user.role },
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Promote or Demote User Role (Admin Only) - Allows admins to promote/demote users
exports.promoteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: "User not found" });

		const { role = "librarian" } = req.body;
		user.role = role;
		await user.save();

		res.json({ message: "User role updated successfully", user });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Reset Borrower Tickets (Librarians & Admins) - Resets borrower's tickets after book returns
exports.resetBorrowerTickets = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: "User not found" });

		// Assign default tickets based on user role
		if (user.role === "underGraduate") user.borrowerTickets = 2;
		else if (["postGraduate", "faculty", "nonTeachingStaff", "researcher"].includes(user.role))
			user.borrowerTickets = 4;

		await user.save();
		res.json({ message: "Borrower tickets reset successfully", user });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Delete a User (Admin) - Removes users from the system
exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) return res.status(404).json({ message: "User not found" });

		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};
