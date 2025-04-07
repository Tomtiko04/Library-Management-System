const Waitlist = require("../models/waitList");

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
