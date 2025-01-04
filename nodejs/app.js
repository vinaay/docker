const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Docker with Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});