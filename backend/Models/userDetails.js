const db = require('../config/db'); // Import database connection

const createMessage = (name, email, subject, message, callback) => {
    const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, subject, message], callback);
};

module.exports = { createMessage };
