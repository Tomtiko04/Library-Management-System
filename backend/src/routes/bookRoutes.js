const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();


router.route("/").get(bookController.getAllBooks).post(bookController.createBook);
router.route("/:bookId").get(bookController.getBookById).patch(bookController.updateBook).delete(bookController.deleteBook);
router.route("/bulk-import").post(bookController.bulkImportBooks);

// router.post(
// 	"/upload-csv",
// 	auth,
// 	authorize(["admin", "librarian"]),
// 	upload.single("file"),
// 	importBooksFromCSV
// );



module.exports = router;