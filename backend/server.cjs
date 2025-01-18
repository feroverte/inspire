const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const app = express();
const PORT = 5000;
const USERS_FILE = path.join(__dirname, "users.json");

// Use cors middleware to enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Helper function to read user data
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};

// Helper function to write user data
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Endpoint to get all users (for testing purposes)
app.get("/users", (req, res) => {
  res.json(readUsers());
});

// Endpoint to register a new user
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsers();

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push({ username, email, password });
  writeUsers(users);

  res.status(201).json({ message: "Signup successful" });
});

// Endpoint to login a user
app.get("/users/login", (req, res) => {
  const { email, password } = req.query;
  const users = readUsers();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
