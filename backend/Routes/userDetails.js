const express = require('express');
const router = express.Router();
const MessageController = require('../Controllers/userDetails');

// Route to create a new message
router.post('/', MessageController.createMessage);

module.exports = router;
