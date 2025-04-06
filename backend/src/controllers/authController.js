const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateToken = (user) => {
	if (!process.env.JWT_SECRET) {
		// console.error("❌ JWT_SECRET is missing in environment variables!");
		throw new Error("JWT_SECRET is not defined.");
	}

	const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	// console.log("✅ Generated Token:", token); // Log the token
	return token;
};

// User Signup
exports.register = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { name, email, password, role, libraryId } = req.body;

		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ message: "User already exists" });

		if (
			(role === "underGraduate" ||
				role === "postGraduate" ||
				role === "faculty" ||
				role === "nonTeachingStaff" ||
				role === "researcher") &&
			!libraryId
		) {
			return res.status(400).json({ message: "Library ID is required" });
		}

		// ✅ Ensure unique Library ID only for students
		if (
			role === "underGraduate" ||
			role === "postGraduate" ||
			role === "faculty" ||
			role === "nonTeachingStaff" ||
			role === "researcher"
		) {
			const existingLibraryId = await User.findOne({ libraryId });
			if (existingLibraryId) {
				return res.status(400).json({ message: "Library ID already in use" });
			}
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		user = new User({
			name,
			email,
			password: hashedPassword,
			role,
			libraryId:
				role === "underGraduate" ||
				role === "postGraduate" ||
				role === "faculty" ||
				role === "nonTeachingStaff" ||
				role === "researcher"
					? libraryId
					: null,
		});

		await user.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// User Login
// exports.login = async (req, res) => {
// 	const { email, password } = req.body;

// 	try {
// 		const user = await User.findOne({ email });
// 		if (!user) return res.status(400).json({ message: "Invalid credentials" });

// 		const isMatch = await bcrypt.compare(password, user.password);
// 		if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// 		const token = generateToken(user);
// 		res.json({
// 			token,
// 			user: { id: user._id, name: user.name, role: user.role, libraryId: user.libraryId },
// 		});
// 	} catch (error) {
// 		res.status(500).json({ message: "Server Error" });
// 	}
// };

exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		// console.log("🔍 User trying to log in:", user); // Log the user

		if (!user) return res.status(400).json({ message: "Invalid credentials" });

		// console.log("🔍 Stored Hashed Password:", user.password);
		// console.log("🔍 Entered Password:", password);

		const isMatch = await bcrypt.compare(password, user.password);
		// console.log("🔍 Password Match:", isMatch); // Log password comparison

		if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

		const token = generateToken(user);
		res.json({
			token,
			user: { id: user._id, name: user.name, role: user.role, libraryId: user.libraryId },
		});
	} catch (error) {
		// console.error("❌ Internal Server Error:", error);
		res.status(500).json({ message: "Server Error" });
	}
};

// exports.login = async (req, res) => {
// 	const { email, password } = req.body;

// 	try {
// 		const user = await User.findOne({ email });
// 		console.log("🔍 User trying to log in:", user);

// 		if (!user) return res.status(400).json({ message: "Invalid credentials" });

// 		// Ensure user.password is available before comparing
// 		if (!user.password) {
// 			console.error("❌ Error: User exists but has no password field in the database.");
// 			return res.status(500).json({ message: "Server Error: Invalid user data" });
// 		}

// 		const isMatch = await bcrypt.compare(password, user.password);
// 		console.log("🔍 Password Match:", isMatch);

// 		if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// 		const token = generateToken(user);
// 		res.json({
// 			token,
// 			user: { id: user._id, name: user.name, role: user.role, libraryId: user.libraryId },
// 		});
// 	} catch (error) {
// 		console.error("❌ Internal Server Error:", error);
// 		res.status(500).json({ message: "Server Error" });
// 	}
// };
