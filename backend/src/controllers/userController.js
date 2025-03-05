const User = require("../models/userModel.js");

// Get All Users (Admin Only)
// exports.getAllUsers = async (req, res) => {
// 	try {
// 		const users = await User.find().select("-password");
// 		res.status(200).json({
// 			result: users.length,
// 			data:{
// 				users
// 			}
// 		});
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// };

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find({ role: { $ne: "admin" } }).select("-password");
		res.
			status(200).json({
				result: users.length,
				data: {
					users,
				},
			});
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// Get Logged-in User Profile
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

// Promote User to Librarian (Admin Only)
exports.promoteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: "User not found" });

		user.role = "librarian";
		await user.save();

		res.json({ message: "User promoted to librarian", user });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update User Profile
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