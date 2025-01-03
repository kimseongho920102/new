const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

app.post('/api/submit', (req, res) => {
  const { input } = req.body;
  res.json({ response: `You sent: ${input}` });
});