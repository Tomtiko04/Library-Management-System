const express = require("express");
const { body } = require("express-validator");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// Validation Rules
const validateUser = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Valid email is required"),
	body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
	body("libraryId").optional().isString().withMessage("Library ID must be a string"),
];

// Authentication Routes
router.post("/register", validateUser, register);
router.post("/login", login);

module.exports = router;
