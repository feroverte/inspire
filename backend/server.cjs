const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const USERS_FILE = path.join(__dirname, "users.json");

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());

// Helper functions to read/write users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
};

const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// User registration endpoint
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

  res.status(201).json({ message: "Signup successful!" });
});

// User login endpoint
app.get("/users/login", (req, res) => {
  const { email, password } = req.query;
  const users = readUsers();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

// Get user data endpoint
app.get("/users/:email", (req, res) => {
  const { email } = req.params;
  const users = readUsers();

  const user = users.find((user) => user.email === email);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
