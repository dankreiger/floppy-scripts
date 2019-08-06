#!/usr/bin/env node

const shell = require('shelljs');
const success = require('./../prompts/success');
const chalk = require('chalk');

const {
  appComponent,
  appIndex
} = require('../../stringConstants/appComponent');

const clearCRAScaffold = () => {
  console.log(chalk.white('Remove CRA boilerplate...\n'));

  shell.rm('src/logo.svg');
  shell.rm('src/App.css');
  shell.rm('src/App.js');
  shell.rm('src/App.test.js');
  shell.mkdir('src/App');

  console.log(
    chalk.white('Adding App component files to '),
    chalk.white.cyan.bold('src/App\n')
  );

  shell.touch('src/App/App.js');
  shell.touch('src/App/index.js');

  shell.ShellString(appComponent).to('src/App/App.js');
  shell.ShellString(appIndex).to('src/App/index.js');

  success('src/App/App.js');
  success('src/App/index.js');
};

module.exports = clearCRAScaffold;
