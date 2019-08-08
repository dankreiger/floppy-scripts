#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const appStyles = require('./../../stringConstants/appStyles');
const success = require('./../prompts/success');

const setupStyledComponents = () => {
  console.log(
    chalk.white('Installing'),
    chalk.cyan.bold('styled-components\n')
  );
  shell.exec('yarn add styled-components');
  shell.mkdir('src/App');

  const fileName = 'src/App/App.styles.js';
  shell.touch(fileName);
  shell.ShellString(appStyles).to(fileName);
  success(fileName);
};

module.exports = setupStyledComponents;
