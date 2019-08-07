#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');
const indexWithReactRouterString = require('../../stringConstants/indexWithReactRouterString');

const setupIndexWithReactRouter = () => {
  shell.exec('yarn add react-router-dom');

  const indexFileName = 'src/index.js';
  shell.exec();

  console.log(chalk.white('Creating '), chalk.cyan.bold(`${indexFileName}\n`));
  shell.ShellString(indexWithReactRouterString).to(indexFileName);
  success(indexFileName);
};

const setupReactRouter = () => {
  setupIndexWithReactRouter();
};

module.exports = setupReactRouter;