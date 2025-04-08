// routes/waitlistRoutes.js
const express = require("express");
const router = express.Router();
const { joinWaitlist } = require("../controllers/waitListController");
const { auth } = require("../middleware/authMiddleware");

router.post("/join/:bookId", auth, joinWaitlist);

module.exports = router;
