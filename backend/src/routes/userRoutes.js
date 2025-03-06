const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const {
	getAllUsers,
	getUserProfile,
	updateUserProfile,
	promoteUser,
	resetBorrowerTickets,
	deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Get All Users (Admins & Librarians Only)
router.get("/", auth, authorize(["admin", "librarian"]), getAllUsers);

// Get Logged-in User Profile
router.get("/me", auth, getUserProfile);

// Update Logged-in User Profile
router.patch("/me", auth, updateUserProfile);

// Promote/Demote User Role (Admin Only)
router.patch("/promote/:id", auth, authorize(["admin"]), promoteUser);

// Reset Borrower Tickets (Librarian & Admin)
router.patch("/reset-tickets/:id", auth, authorize(["admin", "librarian"]), resetBorrowerTickets);

// Delete User (Admin Only)
router.delete("/:id", auth, authorize(["admin"]), deleteUser);

module.exports = router;
