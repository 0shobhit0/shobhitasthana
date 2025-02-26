const MessageModel = require('../Models/userDetails');

const createMessage = (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    MessageModel.createMessage(name, email, subject, message, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }
        res.status(201).json({ message: 'Message sent successfully', messageId: result.insertId });
    });
};

module.exports = { createMessage };
