const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const sendEmail = require('../utils/sendEmail');

// Generate Due Date Reminders (Runs Daily)
exports.sendDueDateReminders = async (req, res) => {
	try {
		// Fetch users with due date approaching due dates
		const users = await User.find({
			'borrowedBooks.dueDate': {
				$lte: new Date(new Date.now() + 3 * 24 * 60 * 60 * 1000)
			}
		});

		// Send email notifications to each user
		for (const user of users) {
			const dueBooks = user.borrowedBooks.filter(book => book.dueDate <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

			for (const book of dueBooks) {
				// Create a notification
				const notification = new Notification({
					user: user._id,
					message: `Reminder: Due date for book "${book.title}" is approaching on ${book.dueDate.toDateString()} . Please return it on time to avoid fines.`,
					read: false
				});
				await notification.save();

				//Send  an email notification
				await sendEmail({
					to: user.email,
					subject: 'Library: Due Date Reminder',
					text: `Dear ${user.name}, \n\n This is a reminder that the book "${book.title}" is approaching on ${book.dueDate.toDateString()}. Please return it on time to avoid fines. \n\n Regards, \n Your Library`
				});
				}
			}

			res.status(200).json({
				status: "success",
				message: "Due date reminders sent successfully",
			});
		} catch (error) {
			res.status(500).json({ 
				status: "error",
				message:error.message,
			});
		}
	};

// Generate Overdue Fine Notifications (Runs Daily)
exports.sendOverdueFineNotifications = async () => {
	res.status(200).json({
		status: "success",
	});
};

// Get User Notifications
exports.getUserNotifications = async (req, res) => {
res.status(200).json({
	status: "success",
});
};

// Mark Notification as Read
exports.markAsRead = async (req, res) => {
	res.status(200).json({
		status: "success",
	});
};
