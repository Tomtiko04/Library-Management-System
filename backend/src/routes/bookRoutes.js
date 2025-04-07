const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const {
	createBook,
	getAllBooks,
	getBookById,
	updateBook,
	deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

// ✅ Public Routes
router.get("/", getAllBooks);
router.get("/:id", getBookById);

// ✅ Admin/Librarian Only
router.post("/", auth, authorize(["admin", "librarian"]), createBook);
router.patch("/:id", auth, authorize(["admin", "librarian"]), updateBook);
router.delete("/:id", auth, authorize(["admin", "librarian"]), deleteBook);

// router.route("/bulk-import").post(bookController.bulkImportBooks);

module.exports = router;