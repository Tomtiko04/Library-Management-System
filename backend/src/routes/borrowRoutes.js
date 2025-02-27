const express = require('express');
const borrowedBookController = require('../controllers/borrowBookController');


const router = express.Router();

router.route("/").get(borrowedBookController.getBorrowedBooks).post(borrowedBookController.borrowBook);

router.patch("/renew/:borrowId", borrowedBookController.renewBook);
router.patch("/return/:borrowId", borrowedBookController.returnBook);

module.exports = router;