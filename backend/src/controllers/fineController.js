const axios = require("axios");
const Fine = require("../models/fineModel");

// ✅ View All Fines for Logged-in User
exports.getUserFines = async (req, res) => {
	try {
		const fines = await Fine.find({ user: req.user.id }).populate("book");

		res.status(200).json({ fines });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// ✅ Pay Fine via Flutterwave
exports.payFine = async (req, res) => {
	try {
		const { fineId } = req.body;
		const fine = await Fine.findById(fineId);

		if (!fine) return res.status(404).json({ message: "Fine not found" });
		if (fine.status === "paid") return res.status(400).json({ message: "Fine already paid" });

		// ✅ Generate Flutterwave Payment Link
		const paymentData = {
			tx_ref: `FINE-${fine._id}-${Date.now()}`,
			amount: fine.amount,
			currency: "NGN",
			redirect_url: "http://localhost:5173/payment-success", // Change to frontend URL
			customer: {
				email: req.user.email,
				name: req.user.name,
			},
		};

		const response = await axios.post("https://api.flutterwave.com/v3/payments", paymentData, {
			headers: { Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}` },
		});

		res.status(200).json({ message: "Payment initiated", paymentLink: response.data.data.link });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Payment failed", error: error.response?.data || error.message });
	}
};

exports.confirmPayment = async (req, res) => {
	try {
		const { transaction_id } = req.query;

		const response = await axios.get(
			`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
			{
				headers: { Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}` },
			}
		);

		if (response.data.status !== "success") {
			return res.status(400).json({ message: "Payment verification failed" });
		}

		const fine = await Fine.findOne({ transactionId: response.data.data.tx_ref });
		if (!fine) return res.status(404).json({ message: "Fine record not found" });

		fine.status = "paid";
		fine.paymentDate = new Date();
		fine.transactionId = transaction_id;
		await fine.save();

		res.status(200).json({ message: "Fine payment verified successfully", fine });
	} catch (error) {
		res.status(500).json({
			message: "Payment verification failed",
			error: error.response?.data || error.message,
		});
	}
};

exports.markFineAsPaidManually = async (req, res) => {
	try {
		const { fineId } = req.body;
		const fine = await Fine.findById(fineId);

		if (!fine) return res.status(404).json({ message: "Fine not found" });
		if (fine.status === "paid") return res.status(400).json({ message: "Fine already paid" });

		// ✅ Only Admins & Librarians can manually record a payment
		if (req.user.role !== "admin" && req.user.role !== "librarian") {
			return res
				.status(403)
				.json({
					message: "Access denied. Only Admins and Librarians can mark fines as paid manually.",
				});
		}

		fine.status = "paid";
		fine.paymentMethod = "Manual"; // ✅ Marked as manually paid
		fine.paymentDate = new Date();
		await fine.save();

		res.status(200).json({ message: "Fine manually recorded as paid", fine });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};


exports.waiveFine = async (req, res) => {
	try {
		const { fineId } = req.body;
		const fine = await Fine.findById(fineId);

		if (!fine) return res.status(404).json({ message: "Fine not found" });

		// ✅ Only Admins & Librarians can waive fines
		if (req.user.role !== "admin" && req.user.role !== "librarian") {
			return res
				.status(403)
				.json({ message: "Access denied. Only Admins and Librarians can waive fines." });
		}

		fine.status = "paid"; // ✅ Mark as resolved
		fine.paymentMethod = "Waived"; // ✅ Admin waived the fine
		fine.paymentDate = new Date();
		await fine.save();

		res.status(200).json({ message: "Fine successfully waived", fine });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

