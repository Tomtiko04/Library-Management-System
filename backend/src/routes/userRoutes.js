const express = require('express');
const {getAllUser, deleteUser} = require('../controllers/userController') 

const router = express.Router();

router.get("/", getAllUser);
router.delete("/:userId", deleteUser);


module.exports = router