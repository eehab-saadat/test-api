const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello! Welcome to your first Node API.' });
});

// A simple POST route
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.status(201).json({
    message: 'Data received successfully!',
    received: receivedData
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});