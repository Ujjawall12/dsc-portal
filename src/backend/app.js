const express = require('express');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});
dotenv.config({
  path: './secrets.env',
});

const app = express();

app.use(express.json());

module.exports = app;
