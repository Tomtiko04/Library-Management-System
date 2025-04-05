const express = require("express");
const { body } = require("express-validator");
const { register, login, verifyEmail, resendVerificationEmail } = require("../controllers/authController");

const router = express.Router();

// Validation Rules
const validateUser = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Valid email is required"),
	body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
	body("libraryId").optional().isString().withMessage("Library ID must be a string"),
];

const validateEmail = [
	body("email").isEmail().withMessage("Valid email is required"),
];

// Authentication Routes
router.post("/register", validateUser, register);
router.post("/login", login);
router.get("/verify-email/:token", verifyEmail);
router.post("/resend-verification", validateEmail, resendVerificationEmail);

module.exports = router;
