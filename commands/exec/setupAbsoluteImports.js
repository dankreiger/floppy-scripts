#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const jsConfigString = require('./../../stringConstants/jsconfig');
const success = require('../prompts/success');

const setupAbsoluteImports = () => {
  const fileName = 'jsconfig.json';
  console.log(
    chalk.white('Configuring '),
    chalk.white.cyan.bold(`${fileName}\n`)
  );
  shell.touch(fileName);
  shell.ShellString(jsConfigString).to(fileName);
  success(fileName);
};

module.exports = setupAbsoluteImports;
