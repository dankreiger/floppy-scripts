#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');

const reduxStoreString = require('./../../stringConstants/reduxStoreString');
const reduxStoreWithPersistanceString = require('./../../stringConstants/reduxStoreWithPersistanceString');
const localStorageString = require('./../../stringConstants/localStorageString');
const rootReducerString = require('./../../stringConstants/rootReducerString');
const actionsString = require('./../../stringConstants/actionsString');
const constantsString = require('./../../stringConstants/constantsString');
const indexWithReduxString = require('./../../stringConstants/indexWithReduxString');
const success = require('./../prompts/success');
const setupAbsoluteImports = require('./setupAbsoluteImports');

const setupStore = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';

  console.log(chalk.white('Creating '), chalk.cyan.bold(`${storeFileName}\n`));
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreString).to(storeFileName);
  success(storeFileName);
};

const setupStoreWithPersistance = () => {
  const storeDir = 'src/store';
  if (!shell.test('-d', storeDir)) {
    shell.mkdir(storeDir);
    const storeFileName = `${storeDir}/store.js`;
    console.log(
      chalk.white('Creating '),
      chalk.cyan.bold(`${storeFileName}\n`)
    );
    shell.touch(storeFileName);
    shell.ShellString(reduxStoreWithPersistanceString).to(storeFileName);
    success(storeFileName);

    const localStorageFileName = `${storeDir}/localStorage.js`;
    console.log(
      chalk.white('Creating '),
      chalk.cyan.bold(`${localStorageFileName}\n`)
    );
    shell.touch(localStorageFileName);
    shell.ShellString(localStorageString).to(localStorageFileName);
    success(localStorageFileName);
  }
};

const setupReducers = () => {
  const reducersDir = 'src/reducers';
  if (!shell.test('-d', reducersDir)) {
    shell.mkdir(reducersDir);
    const reducersFileName = `${reducersDir}/index.js`;
    console.log(
      chalk.white('Creating '),
      chalk.cyan.bold(`${reducersFileName}\n`)
    );
    shell.touch(reducersFileName);
    shell.ShellString(rootReducerString).to(reducersFileName);
    success(reducersFileName);
  }
};

const setupActions = () => {
  const actionsDir = 'src/actions';
  if (!shell.test('-d', actionsDir)) {
    shell.mkdir(actionsDir);
    const actionsFileName = `${actionsDir}/index.js`;
    console.log(
      chalk.white('Creating '),
      chalk.cyan.bold(`${actionsFileName}\n`)
    );
    shell.ShellString(actionsString).to(actionsFileName);
    shell.touch(actionsFileName);

    success(actionsFileName);
  }
};

const setupConstants = () => {
  const constantsDir = 'src/constants';
  if (!shell.test('-d', constantsDir)) {
    shell.mkdir(constantsDir);
    const constantsFileName = `${constantsDir}/index.js`;
    console.log(
      chalk.white('Creating '),
      chalk.cyan.bold(`${constantsFileName}\n`)
    );
    shell.ShellString(constantsString).to(constantsFileName);
    shell.touch(constantsFileName);

    success(constantsFileName);
  }
};

const setupIndexWithRedux = () => {
  const indexFileName = 'src/index.js';
  console.log(chalk.white('Creating '), chalk.cyan.bold(`${indexFileName}\n`));
  shell.ShellString(indexWithReduxString).to(indexFileName);
  success(indexFileName);
};

const setupComponents = () => {
  const components = 'src/components';
  if (!shell.test('-d', components)) {
    console.log(chalk.white('Creating '), chalk.cyan.bold(`${components}\n`));
    shell.mkdir(components);
    success(components);
  }
};

const setupRedux = persistedState => {
  setupAbsoluteImports();
  setupStore();
  setupReducers();
  setupActions();
  setupConstants();
  setupComponents();
  setupIndexWithRedux();
  if (persistedState) {
    console.log(
      chalk.white('Installing '),
      chalk.cyan.bold(`lodash.throttle\n`)
    );
    shell.exec('yarn add lodash.throttle');
    setupStoreWithPersistance();
  } else {
    setupStore();
  }
};

module.exports = setupRedux;
