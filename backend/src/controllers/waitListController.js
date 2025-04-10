const Waitlist = require("../models/waitList");
const sendEmail = require("../utils/sendEmail");

exports.joinWaitlist = async (req, res) => {
	try {
		const { bookId } = req.params;
		const userId = req.user._id;

		const alreadyInWaitlist = await Waitlist.findOne({
			user: userId,
			book: bookId,
			status: "waiting",
		});
		if (alreadyInWaitlist)
			return res.status(400).json({ message: "Already in waitlist for this book" });

		const waitlistEntry = new Waitlist({ user: userId, book: bookId });
		await waitlistEntry.save();

		 // Notify the user via email
		await sendEmail({
            to: req.user.email, 
            subject: "Waitlist Confirmation - Library Management System",
            text: `Dear ${req.user.name},\n\nYou have been added to the waitlist for the book with ID: ${bookId}.\n\nWe will notify you when the book becomes available.\n\nBest regards,\nLibrary Management Team`,
        });

		res.status(201).json({ message: "Added to waitlist successfully", waitlistEntry });
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

exports.getBookWaitlist = async (req, res) => {
	try {
		const { bookId } = req.params;
		const waitlist = await Waitlist.find({ book: bookId })
			.populate("user", "name email libraryId")
			.sort({ joinedAt: 1 });

		return res.status(200).json(waitlist); // ✅ Add `return` to prevent fallback below
	} catch (error) {
		return res.status(500).json({ message: "Server Error" }); // ✅ Move this inside `catch`
	}
};
