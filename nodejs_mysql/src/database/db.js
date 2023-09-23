const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root@3',
  database: 'productConcept',
  connectionLimit: 10,
  // waitForConnections: true,
  // queueLimit: 0,
  // connectTimeout: 60000
});

module.exports = pool;