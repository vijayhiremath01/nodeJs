const express = require('express');
const app = express();

app.use(express.json()); // enables JSON parsing

let users = [
  { id: 1, name: 'Vijay' },
  { id: 2, name: 'Preeti' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // ✅ Do NOT wrap in [ ]
  const newUser = { id: users.length + 1, name };

  // ✅ Do NOT reassign users = users.push(...)
  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
