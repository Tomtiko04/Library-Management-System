const express = require("express");
const { getUserNotifications, markAsRead, sendDueDateReminders } = require("../controllers/notificationController");

const router = express.Router();

// Get User Notifications
router.get("/", getUserNotifications);

//Send Due Date Reminders
router.get("/sendDueDateReminders", sendDueDateReminders);

// Mark Notification as Read
router.patch("/:notificationId/read", markAsRead);

module.exports = router;
