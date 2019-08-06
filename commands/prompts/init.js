#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Floppy Scripts', {
        font: 'Small',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

module.exports = init;
