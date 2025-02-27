const express = require('express');
const {payFine, getUserFines} = require('../controllers/fineController')

const router = express.Router();

router.get("/", getUserFines);

router.patch("/pay/:fineId", payFine);

module.exports = router