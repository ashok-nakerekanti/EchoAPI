// Import express library
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware — allows frontend to talk to backend
app.use(cors());
app.use(express.json()); // allows reading JSON from requests

// A simple route — frontend sends text, backend replies
app.post('/api/message', (req, res) => {
  const { text } = req.body; // get the text sent from frontend
  console.log('Received from frontend:', text);

  // Send a response back
  res.json({
    reply: `Backend received your message: "${text}". Great job!`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});