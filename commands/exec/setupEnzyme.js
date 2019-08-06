#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const setupTestsSimple = require('./../../stringConstants/setupTestsSimple');
const success = require('./../prompts/success');

const setupEnzyme = () => {
  const baseDir = 'src';
  const fileName = 'setupTests.js';

  console.log(
    chalk.white('Installing'),
    chalk.cyan.bold('enzyme enzyme-adapter-react-16\n')
  );

  shell.exec('yarn add --dev enzyme enzyme-adapter-react-16');
  shell.touch(`${baseDir}/${fileName}`);

  const file = `${baseDir}/${fileName}`;
  shell.ShellString(setupTestsSimple).to(file);
  success(fileName);
};

module.exports = setupEnzyme;
