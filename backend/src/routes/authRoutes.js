const express = require("express");
const { body } = require("express-validator");
const { register, login, verifyEmail, resendVerificationEmail, forgotPassword, resetPassword } = require("../controllers/authController");

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

const validateResetPassword = [
	body("token").notEmpty().withMessage("Reset token is required"),
	body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];
// Authentication Routes
router.post("/register", validateUser, register);
router.post("/login", login);
router.get("/verify-email/:token", verifyEmail);
router.post("/resend-verification", validateEmail, resendVerificationEmail);
router.post("/forgot-password", validateEmail, forgotPassword);
router.get("/reset-password/:token", (req, res) => {
	// This route is just for handling the email link click
	const { token } = req.params;
	
	// If FRONTEND_URL is defined, redirect to the frontend
	if (process.env.FRONTEND_URL) {
		return res.redirect(`${process.env.FRONTEND_URL}/reset-password?token=${token}`);
	}
	
	// If no frontend URL is defined, return an HTML response
	res.send(`
		<!DOCTYPE html>
		<html>
		<head>
			<title>Reset Your Password</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<style>
				body {
					font-family: Arial, sans-serif;
					line-height: 1.6;
					margin: 0;
					padding: 20px;
					background-color: #f4f4f4;
				}
				.container {
					max-width: 600px;
					margin: 0 auto;
					background: #fff;
					padding: 20px;
					border-radius: 5px;
					box-shadow: 0 0 10px rgba(0,0,0,0.1);
				}
				h1 {
					color: #333;
				}
				.form-group {
					margin-bottom: 15px;
				}
				label {
					display: block;
					margin-bottom: 5px;
				}
				input {
					width: 100%;
					padding: 8px;
					box-sizing: border-box;
					border: 1px solid #ddd;
					border-radius: 4px;
				}
				button {
					background: #4CAF50;
					color: white;
					border: none;
					padding: 10px 15px;
					border-radius: 4px;
					cursor: pointer;
				}
				button:hover {
					background: #45a049;
				}
				.message {
					margin-top: 20px;
					padding: 10px;
					border-radius: 4px;
				}
				.success {
					background-color: #dff0d8;
					color: #3c763d;
				}
				.error {
					background-color: #f2dede;
					color: #a94442;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Reset Your Password</h1>
				<p>Enter your new password below:</p>
				<form id="resetForm">
					<div class="form-group">
						<label for="password">New Password:</label>
						<input type="password" id="password" name="password" required minlength="6">
					</div>
					<div class="form-group">
						<label for="confirmPassword">Confirm Password:</label>
						<input type="password" id="confirmPassword" name="confirmPassword" required minlength="6">
					</div>
					<input type="hidden" id="token" value="${token}">
					<button type="submit">Reset Password</button>
				</form>
				<div id="message" class="message" style="display: none;"></div>
			</div>
			
			<script>
				document.getElementById('resetForm').addEventListener('submit', async function(e) {
					e.preventDefault();
					
					const password = document.getElementById('password').value;
					const confirmPassword = document.getElementById('confirmPassword').value;
					const token = document.getElementById('token').value;
					const messageDiv = document.getElementById('message');
					
					// Check if passwords match
					if (password !== confirmPassword) {
						messageDiv.className = 'message error';
						messageDiv.textContent = 'Passwords do not match';
						messageDiv.style.display = 'block';
						return;
					}
					
					try {
						const response = await fetch('/api/v1/auth/reset-password', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({ token, password })
						});
						
						const data = await response.json();
						
						if (response.ok) {
							messageDiv.className = 'message success';
							messageDiv.textContent = data.message || 'Password reset successful';
						} else {
							messageDiv.className = 'message error';
							messageDiv.textContent = data.message || 'Error resetting password';
						}
						
						messageDiv.style.display = 'block';
						
						if (response.ok) {
							// Clear the form if successful
							document.getElementById('resetForm').reset();
						}
					} catch (error) {
						messageDiv.className = 'message error';
						messageDiv.textContent = 'Network error. Please try again later.';
						messageDiv.style.display = 'block';
					}
				});
			</script>
		</body>
		</html>
	`);
});
router.post("/reset-password", validateResetPassword, resetPassword);

module.exports = router;
