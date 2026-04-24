import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const sqlite = sqlite3.verbose();
app.use(cors());
app.use(express.json());

// Connecting to database
const db = new sqlite.Database("musicApp.db", (err) => {
  if (err) { 
    console.error(err.message);
  } else {
    console.log("Connected to SQLite DB");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS Accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT UNIQUE,
    password TEXT,
    firstName TEXT,
    lastName TEXT,
    email TEXT
  )
`);

// if login info matches db 
app.post("/login", (request, response) => {
  const { userName, password } = request.body;

  const query = `SELECT * FROM Accounts WHERE userName = ?`;

  db.get(query, [userName], async (err, account) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    if (!account) {
      return response.json({ success: false, message: "Account not found" });
    }

    // compare passwords
    const match = await bcrypt.compare(password, account.password);

    if (match) {
      response.json({ success: true, account });
    } else {
      response.json({ success: false, message: "Invalid password" });
    }
  });
});

// create account call
app.post("/register", async (request, response) => {
  const { userName, password } = request.body;

  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO Accounts (userName, password)
      VALUES (?, ?)
    `;

    db.run(query, [userName, hashedPassword], function (err) {
      if (err) {
        return response.status(400).json({
          success: false,
          message: "Username already exists",
        });
      }

      response.json({
        success: true,
        message: "Account created successfully",
      });
    });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// fetch call 
app.get("/accounts", (request, response) => {
  const query = "SELECT * FROM Accounts";

  db.all(query, [], (err, rows) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }
    response.json(rows);
  });
});

// Update call
app.put("/accounts/:id", async (request, response) => {
  const { id } = request.params;
  const { userName, password } = request.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    UPDATE Accounts
    SET userName = ?, password = ?
    WHERE id = ?
  `;

  db.run(query, [userName, hashedPassword, id], function (err) {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    response.json({
      success: true,
      message: "Account updated",
    });
  });
});

// Delete call
app.delete("/accounts/:id", (request, response) => {
  const { id } = request.params;

  const query = "DELETE FROM Accounts WHERE id = ?";

  db.run(query, [id], function (err) {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    response.json({
      success: true,
      message: "Account deleted",
    });
  });
});

// always at the bottom
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
