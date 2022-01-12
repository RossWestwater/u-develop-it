const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '6z8K#4O^w^9w',
  database: 'election'
});

module.exports = db;