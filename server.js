const express = require('express');
const app = express();

// Use the PORT environment variable if defined, otherwise default to 4000
const port = process.env.PORT || 4000;

// Define a simple route to respond with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and bind it to 0.0.0.0 to make it accessible from the outside
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});