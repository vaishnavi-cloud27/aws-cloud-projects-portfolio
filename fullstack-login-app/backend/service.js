const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 In-memory database
let users = [];

// ✅ API test route
app.get('/api', (req, res) => {
  res.json({ message: "Backend is working" });
});

// 📝 Signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "User registered" });
});

// 🔐 Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
