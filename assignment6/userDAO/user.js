const { runQuery } = require('./../lib/database');

const getByUsername = async username => {
    const pstmt = 'SELECT id, password, display_name AS displayName, is_active AS isActive, is_staff AS isStaff ' +
                  'FROM users WHERE username = ?';
    const data = [username];
    const result = await runQuery(pstmt, data);
    return result[0];
};

const create = async (username, password, displayName) => {
    const pstmt = 'INSERT INTO `users` (username, password, display_name) VALUES (?, ?, ?)'
    const data = [username, password, displayName];
    await runQuery(pstmt, data);
};

module.exports = { getByUsername, create };