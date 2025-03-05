const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const { getAllUsers, getUserProfile, promoteUser } = require("../controllers/userController");

const router = express.Router();

// Get All Users (Admin Only)
router.get("/", auth, authorize(["admin"]), getAllUsers);

// Get Logged-in User Profile
router.get("/me", auth, getUserProfile);

// Promote User to Librarian (Admin Only)
router.patch("/promote/:id", auth, authorize(["admin"]), promoteUser);

module.exports = router;