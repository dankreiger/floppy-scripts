#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const indexWithReactRouterString = require('../../stringConstants/indexWithReactRouterString');
const success = require('./../prompts/success');

const setupIndexWithReactRouter = () => {
  shell.exec('yarn add react-router-dom');

  const indexFileName = 'src/index.js';

  console.log(chalk.white('Creating '), chalk.cyan.bold(`${indexFileName}\n`));
  shell.ShellString(indexWithReactRouterString).to(indexFileName);
  success(indexFileName);
};

const setupReactRouter = () => {
  setupIndexWithReactRouter();
};

module.exports = setupReactRouter;
