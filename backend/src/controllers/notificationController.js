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
exports.sendOverdueFineNotifications = async (req, res) => {
    try {
        // Fetch users with overdue books
        const users = await User.find({
            'borrowedBooks.dueDate': {
                $lt: new Date() // Books with due dates in the past
            }
        });

        // Send notifications to each user
        for (const user of users) {
            const overdueBooks = user.borrowedBooks.filter(book => book.dueDate < new Date());

            for (const book of overdueBooks) {
                // Create a notification
                const notification = new Notification({
                    user: user._id,
                    message: `Overdue Notice: The book "${book.title}" was due on ${book.dueDate.toDateString()}. Please return it immediately to avoid further fines.`,
                    read: false
                });
                await notification.save();

                // Send an email notification
                await sendEmail({
                    to: user.email,
                    subject: 'Library: Overdue Book Notice',
                    text: `Dear ${user.name},\n\nThe book "${book.title}" was due on ${book.dueDate.toDateString()} and has not been returned. Please return it immediately to avoid further fines.\n\nThank you.`
                });
            }
        }

        res.status(200).json({
            status: 'success',
            message: 'Overdue fine notifications sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

// Get User Notifications
exports.getUserNotifications = async (req, res) => {
    try {
        // Fetch user ID from the request (assumes user ID is passed as a parameter)
        const userId = req.params.userId;

        // Fetch notifications for the user
        const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });

        // Respond with the notifications
        res.status(200).json({
            status: "success",
            results: notifications.length,
            data: {
                notifications,
            },
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

// Mark Notification as Read
exports.markAsRead = async (req, res) => {
    try {
        // Fetch notification ID from the request (assumes notification ID is passed as a parameter)
        const notificationId = req.params.notificationId;

        // Update the notification's "read" status to true
        const notification = await Notification.findByIdAndUpdate(
            notificationId,
            { read: true },
        	{ new: true } // Return the updated document
        );

        // If the notification is not found, return an error
        if (!notification) {
            return res.status(404).json({
                status: "error",
                message: "Notification not found",
            });
        }

        // Respond with the updated notification
        res.status(200).json({
            status: "success",
            data: {
                notification,
            },
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};
