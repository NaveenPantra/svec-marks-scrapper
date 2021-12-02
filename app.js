const chalk = require('chalk');
const figlet = require('figlet');

const questions = require('./lib/questions');

const init = () => {
  console.log(
    chalk.blue(
      figlet.textSync('Marks - Scraper', { horizontalLayout: 'full' })
    )
  );
  questions.askQuestions();
}

init();
