// Benjamin Lukens CIS325 web server trial application
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! This is my first Node.js web app.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


