#!/usr/bin/env node

const shell = require('shelljs');
const success = require('../prompts/success');
const chalk = require('chalk');

const propTypesFolder = () => {
  console.log(chalk.white('Creating'), chalk.white.cyan.bold('src/types\n'));
  const folder = 'src/types';
  shell.mkdir('src/types');
  success(folder);
};

module.exports = propTypesFolder;
