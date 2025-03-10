const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const {
	borrowBook,
	getAllBorrowedBooks,
	getUserBorrowingHistory,
	renewBook,
	returnBook,
} = require("../controllers/borrowBookController");

const router = express.Router();

// Borrow a Book (Authenticated Users)
router.post("/", auth, borrowBook);

router.get("/", auth, authorize(["admin", "librarian"]), getAllBorrowedBooks);

router.get("/history", auth, getUserBorrowingHistory);

// ✅ Renew a Borrowed Book (Authenticated Users)
router.post("/renew", auth, renewBook);

// ✅ Return a Borrowed Book (Authenticated Users)
router.post("/return", auth, returnBook);

module.exports = router;
