const app = require('./app');

const chalk = require('chalk');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running but is empty yet');
});

app.listen(port, (err) => {
  if (err) {
    console.error(chalk.red('Failed to start server:'), err);
  } else {
    console.log(chalk.white.bgBlack.bold(` Backend Server is running on:  `));
    console.log(
      chalk.bold.greenBright(`   ➜ `, chalk.bold(`http://localhost:${port}`))
    );
  }
});
