const express = require("express");
const { getUserNotifications, markAsRead } = require("../controllers/notificationController");

const router = express.Router();

// Get User Notifications
router.get("/", getUserNotifications);

// Mark Notification as Read
router.patch("/:notificationId/read", markAsRead);

module.exports = router;
