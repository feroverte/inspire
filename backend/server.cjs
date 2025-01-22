// server.cjs
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const USERS_FILE = path.join(__dirname, "users.json");
const FAQ_FILE = path.join(__dirname, "fag_comments.json");

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());

// Helper functions to read/write FAQ data
const readFaq = () => {
  if (!fs.existsSync(FAQ_FILE)) {
    fs.writeFileSync(FAQ_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(FAQ_FILE, "utf-8"));
};

const writeFaq = (faq) => {
  fs.writeFileSync(FAQ_FILE, JSON.stringify(faq, null, 2));
};

// Get all FAQ entries
app.get("/faq", (req, res) => {
  const faq = readFaq();
  res.status(200).json(faq);
});

// Add a new question
app.post("/faq/question", (req, res) => {
  const { username, question } = req.body;
  if (!username || !question) {
    return res
      .status(400)
      .json({ message: "Username and question are required." });
  }

  const faq = readFaq();
  faq.push({ username, question, answers: [] });
  writeFaq(faq);
  res.status(201).json({ message: "Question added successfully." });
});

// Add an answer to a question
app.post("/faq/answer", (req, res) => {
  const { questionIndex, answer } = req.body;
  if (questionIndex === undefined || !answer) {
    return res
      .status(400)
      .json({ message: "Question index and answer are required." });
  }

  const faq = readFaq();
  if (!faq[questionIndex]) {
    return res.status(404).json({ message: "Question not found." });
  }

  faq[questionIndex].answers.push(answer);
  writeFaq(faq);
  res.status(201).json({ message: "Answer added successfully." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
