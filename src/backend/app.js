const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const projectRoutes = require("./routes/v1/project.routes");
const eventRoutes = require("./routes/v1/event.routes");
const memberRoutes = require("./routes/v1/member.routes");
const authRoutes = require("./routes/v1/auth.routes");

dotenv.config({
  path: "./config.env",
});
dotenv.config({
  path: "./secrets.env",
});

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://ec2-18-136-203-105.ap-southeast-1.compute.amazonaws.com",
    ],
  }),
);

app.use(express.json());
// routes
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/members", memberRoutes);
app.use("/api/v1/auth", authRoutes);

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
