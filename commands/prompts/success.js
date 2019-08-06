#!/usr/bin/env node

const chalk = require('chalk');

const success = filepath => {
  console.log(chalk.white.bgGreen.bold(`Done! File created at ${filepath}`));
};

module.exports = success;
