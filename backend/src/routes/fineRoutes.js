const express = require("express");
const { auth, authorize } = require("../middleware/authMiddleware");
const {
	getUserFines,
	payFine,
	confirmPayment,
	markFineAsPaidManually,
	waiveFine,
} = require("../controllers/fineController");

const router = express.Router();

// ✅ Get all fines for logged-in user
router.get("/", auth, getUserFines);

// ✅ Pay Fine using Flutterwave
router.post("/pay", auth, payFine);

// ✅ Confirm Fine Payment after Flutterwave transaction
router.get("/confirm-payment", confirmPayment);

// ✅ Mark Fine as Paid Manually (Admin/Librarian Only)
router.post("/manual-pay", auth, authorize(["admin", "librarian"]), markFineAsPaidManually);

// ✅ Waive Fine (Admin/Librarian Only)
router.post("/waive", auth, authorize(["admin", "librarian"]), waiveFine);

module.exports = router;

// http://localhost:5000/api/v1/fine/confirm-payment?transaction_id=FLW123456
