const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 4000;
const saltRounds = 10;

// Middleware
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create user table
const createUserTable = `
CREATE TABLE IF NOT EXISTS TB_USER (
  USER_ID VARCHAR(20) PRIMARY KEY,
  USER_EMAIL VARCHAR(255) NOT NULL,
  PASSWORD VARCHAR(255) NOT NULL,
  USER_NAME VARCHAR(255) NOT NULL,
  USE_YN CHAR(1) DEFAULT 'Y',
  LAST_LOGIN TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  SIGN_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.run(createUserTable, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('User table ready');
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { userId, userEmail, password, userName } = req.body;

  if (!userId || !userEmail || !password || !userName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insertQuery = `
    INSERT INTO TB_USER (USER_ID, USER_EMAIL, PASSWORD, USER_NAME)
    VALUES (?, ?, ?, ?)
    `;

    db.run(
      insertQuery,
      [userId, userEmail, hashedPassword, userName],
      function (err) {
        if (err) {
          console.error('Error inserting user:', err.message);
          return res.status(500).json({ message: 'Failed to register user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
