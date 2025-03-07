const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const {
	borrowBook,
	getAllBorrowedBooks,
	getUserBorrowingHistory,
} = require("../controllers/borrowBookController");

const router = express.Router();

// Borrow a Book (Authenticated Users)
router.post("/", auth, borrowBook);

router.get("/", auth, authorize(["admin", "librarian"]), getAllBorrowedBooks);

router.get("/history", auth, getUserBorrowingHistory);


module.exports = router;
