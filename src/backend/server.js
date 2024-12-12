const express = require("express");
const chalk = require("chalk");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is running but is empty yet");
});

app.listen(port, (err) => {
  if (err) {
    console.error(chalk.red("Failed to start server:"), err);
  } else {
    console.log(chalk.white.bgBlack.bold(` Backend Server is running on:  `));
    console.log(
      chalk.bold.greenBright(`   ➜ `, chalk.bold(`http://localhost:${port}`))
    );
  }
});
