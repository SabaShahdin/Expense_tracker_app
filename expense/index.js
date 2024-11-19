const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

// MySQL Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2022", // Replace with your database password
  database: "expensetracker",
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
  console.log("Connected to the MySQL database");
});

// Secret for JWT
const JWT_SECRET = "sess"; // Replace with an environment variable in production
// POST /signup route
app.post("/signup", async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    // Check if user already exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) {
            console.error("Database error during signup:", err);
            return res.status(500).json({ message: "Database error" });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Get current date and time (Unix timestamp in milliseconds)
        const now = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format: 'YYYY-MM-DD HH:MM:SS'

        // Insert new user into the database with custom timestamps
        db.query(
            "INSERT INTO users (userName, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
            [userName, email, hashedPassword, now, now],
            (err, result) => {
                if (err) {
                    console.error("Database error during insert:", err);
                    return res.status(500).json({ message: "Database error" });
                }
                res.status(201).json({ message: "User registered successfully!" });
            }
        );
    });
});

// POST /login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password." });
    }

    // Find user by email
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) {
            console.error("Database error during login:", err);
            return res.status(500).json({ message: "Database error" });
        }
        if (result.length === 0) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = result[0];
        console.log("User found:", user); // Debugging log

        // Compare the password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("Password match:", isPasswordCorrect); // Debugging log

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email, userName: user.userName }, JWT_SECRET, {
            expiresIn: "1h", // Token expires in 1 hour
        });

        res.json({ message: "Login successful", token });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
