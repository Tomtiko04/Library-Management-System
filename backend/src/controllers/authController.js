const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../config.env") });

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
// exports.register = async (req, res) => {
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
// 		return res.status(400).json({ errors: errors.array() });
// 	}

// 	try {
// 		const { name, email, password, role, libraryId } = req.body;

// 		let user = await User.findOne({ email });
// 		if (user) return res.status(400).json({ message: "User already exists" });

// 		if (
// 			(role === "underGraduate" ||
// 				role === "postGraduate" ||
// 				role === "faculty" ||
// 				role === "nonTeachingStaff" ||
// 				role === "researcher") &&
// 			!libraryId
// 		) {
// 			return res.status(400).json({ message: "Library ID is required" });
// 		}

// 		// ✅ Ensure unique Library ID only for students
// 		if (
// 			role === "underGraduate" ||
// 			role === "postGraduate" ||
// 			role === "faculty" ||
// 			role === "nonTeachingStaff" ||
// 			role === "researcher"
// 		) {
// 			const existingLibraryId = await User.findOne({ libraryId });
// 			if (existingLibraryId) {
// 				return res.status(400).json({ message: "Library ID already in use" });
// 			}
// 		}

// 		// Generate verification token
// 		const verificationToken = crypto.randomBytes(32).toString('hex');
        
// 		const hashedPassword = await bcrypt.hash(password, 10);
// 		user = new User({
// 			name,
// 			email,
// 			password: hashedPassword,
// 			role,
// 			isVerified: false,
// 			verificationToken,
// 			libraryId:
// 				role === "underGraduate" ||
// 				role === "postGraduate" ||
// 				role === "faculty" ||
// 				role === "nonTeachingStaff" ||
// 				role === "researcher"
// 					? libraryId
// 					: null,
// 		});

// 		await user.save();

// 		// Create verification URL
// 		const verificationURL = `${req.protocol}://${req.get('host')}/api/v1/auth/verify-email/${verificationToken}`;

// 		// Send verification email
// 		await sendEmail({
// 			to: email,
// 			subject: 'Verify Your Email - Library Management System',
// 			text: `Dear ${name},\n\nWelcome to our Library Management System! Your account has been created and requires email verification.\n\nPlease click the link below to verify your email address:\n${verificationURL}\n\nThis link will expire in 24 hours.\n\nYour login details:\nEmail: ${email}\nRole: ${role}\n${libraryId ? `Library ID: ${libraryId}\n` : ''}\n\nBest regards,\nLibrary Management Team`
// 		});

// 		res.status(201).json({ 
// 			message: "User registered successfully", 
// 			info: "A verification email has been sent to your email address. Please verify your email to activate your account."
// 		});
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// };

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

		// ✅ Ensure unique Library ID only for students/staff
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

		// Generate verification token
		const verificationToken = crypto.randomBytes(32).toString("hex");
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create new user
		user = new User({
			name,
			email,
			password: hashedPassword,
			role,
			isVerified: false,
			verificationToken,
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

		// ✅ Try to send email separately
		try {
			const verificationURL = `${req.protocol}://${req.get("host")}/api/v1/auth/verify-email/${verificationToken}`;

			await sendEmail({
				to: email,
				subject: "Verify Your Email - Library Management System",
				text: `Dear ${name},\n\nWelcome to our Library Management System! Your account has been created and requires email verification.\n\nPlease click the link below to verify your email address:\n${verificationURL}\n\nThis link will expire in 24 hours.\n\nYour login details:\nEmail: ${email}\nRole: ${role}\n${libraryId ? `Library ID: ${libraryId}\n` : ""}\n\nBest regards,\nLibrary Management Team`,
			});

			return res.status(201).json({
				message: "User registered successfully",
				info: "A verification email has been sent to your email address. Please verify your email to activate your account.",
			});
		} catch (emailError) {
			console.error("Email sending failed:", emailError);
			return res.status(201).json({
				message: "User registered, but email failed to send.",
				info: "Please contact the admin or request a new verification email.",
				error: emailError.message,
			});
		}
	} catch (error) {
		console.error("Registration failed:", error);
		res
			.status(500)
			.json({ message: "An error occurred during registration.", error: error.message });
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
		
		// Check if user has verified their email
		if (!user.isVerified) {
			return res.status(401).json({ 
				message: "Email not verified", 
				info: "Please verify your email before logging in. Check your inbox for the verification email."
			});
		}

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

// Email Verification
exports.verifyEmail = async (req, res) => {
	try {
		const { token } = req.params;
		
		// Find the user with the verification token
		const user = await User.findOne({ verificationToken: token });
		
		if (!user) {
			return res.status(400).json({ 
				message: "Invalid or expired verification token", 
				info: "Please request a new verification email if your token has expired."
			});
		}
		
		// Update user as verified and remove verification token
		user.isVerified = true;
		user.verificationToken = undefined;
		await user.save();
		
		// Redirect to frontend login page or send success response
		res.redirect(`${process.env.FRONTEND_URL}/auth/signin`);
		// res.status(200).json({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

// Resend Verification Email
exports.resendVerificationEmail = async (req, res) => {
	try {
		const { email } = req.body;
		
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		
		if (user.isVerified) {
			return res.status(400).json({ message: "Email already verified" });
		}
		
		// Generate new verification token
		const verificationToken = crypto.randomBytes(32).toString('hex');
		user.verificationToken = verificationToken;
		await user.save();
		
		// Create verification URL
		const verificationURL = `${req.protocol}://${req.get('host')}/api/v1/auth/verify-email/${verificationToken}`;
		
		// Send verification email
		await sendEmail({
			to: email,
			subject: 'Verify Your Email - Library Management System',
			text: `Dear ${user.name},\n\nPlease click the link below to verify your email address:\n${verificationURL}\n\nThis link will expire in 24 hours.\n\nBest regards,\nLibrary Management Team`
		});
		
		res.status(200).json({ 
			message: "Verification email sent", 
			info: "A new verification email has been sent to your email address."
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
	try {
		const { email } = req.body;

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Generate reset token
		const resetToken = crypto.randomBytes(32).toString('hex');
		user.resetPasswordToken = crypto
			.createHash('sha256')
			.update(resetToken)
			.digest('hex');
		user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

		await user.save();

		// Create reset URL - use the unhashed token in the URL
		const resetURL = `${req.protocol}://${req.get('host')}/api/v1/auth/reset-password/${resetToken}`;

		// Send reset email
		await sendEmail({
			to: email,
			subject: 'Password Reset Request - Library Management System',
			text: `Dear ${user.name},\n\nYou have requested to reset your password. Please click the link below to reset it:\n\n${resetURL}\n\nThis link will expire in 10 minutes.\n\nIf you did not request this password reset, please ignore this email.\n\nBest regards,\nLibrary Management Team`
		});

		res.status(200).json({
			message: "Password reset email sent",
			info: "Please check your email for password reset instructions."
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

// Reset Password
exports.resetPassword = async (req, res) => {
	try {
		const { token, password } = req.body;

		// Hash token to match stored hash
		const resetPasswordToken = crypto
			.createHash('sha256')
			.update(token)
			.digest('hex');

		// Find user with valid reset token
		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpires: { $gt: Date.now() }
		});

		if (!user) {
			return res.status(400).json({
				message: "Invalid or expired reset token",
				info: "Please request a new password reset link."
			});
		}

		// Hash new password
		const hashedPassword = await bcrypt.hash(password, 10);
		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpires = undefined;

		await user.save();

		// Send confirmation email
		await sendEmail({
			to: user.email,
			subject: 'Password Reset Successful - Library Management System',
			text: `Dear ${user.name},\n\nYour password has been successfully reset. You can now log in with your new password.\n\nIf you did not perform this action, please contact support immediately.\n\nBest regards,\nLibrary Management Team`
		});

		res.status(200).json({
			message: "Password reset successful",
			info: "You can now log in with your new password."
		});
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
