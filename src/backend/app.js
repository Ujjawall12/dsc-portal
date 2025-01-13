const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const connectDB = require("./db/connection");
const cors = require("cors");
const projectRoutes = require("./routes/v1/project.routes");

dotenv.config({
  path: "./config.env",
});
dotenv.config({
  path: "./secrets.env",
});

connectDB();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

app.use(express.json());
// routes
app.use("/api/v1/projects", projectRoutes);
app.use("/api", eventRoutes);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "sample.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the HTML file");
      return;
    }
    res.send(data);
  });
});

app.use(express.json());

module.exports = app;
