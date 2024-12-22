const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({
  path: './config.env',
});
dotenv.config({
  path: './secrets.env',
});

const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'sample.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the HTML file');
      return;
    }
    res.send(data);
  });
});

app.use(express.json());

module.exports = app;
