// lib/db.js
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the connection when the server starts
(async () => {
  try {
    const connection = await db.getConnection();
    await connection.ping(); // Optional but nice check
    console.log('✅ Database connected successfully');
    connection.release(); // Release it back to the pool
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error.message);
  }
})();

export default db;
