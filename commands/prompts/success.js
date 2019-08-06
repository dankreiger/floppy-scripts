#!/usr/bin/env node

const chalk = require('chalk');

const success = filepath => {
  console.log(chalk.white.bgGreen.bold(`File created at ${filepath}`));
  console.log('\n\n\n');
};

module.exports = success;
