#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');

const reduxStoreString = require('./../../stringConstants/reduxStoreString');
const reduxStoreWithPersistanceString = require('./../../stringConstants/reduxStoreWithPersistanceString');
const localStorageString = require('./../../stringConstants/localStorageString');
const rootReducerString = require('./../../stringConstants/rootReducerString');
const actionsString = require('./../../stringConstants/actionsString');
const indexWithReduxString = require('./../../stringConstants/indexWithReduxString');
const success = require('./../prompts/success');
const setupAbsoluteImports = require('./setupAbsoluteImports');

const setupStore = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';

  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${storeFileName}\n`)
  );
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreString).to(storeFileName);
  success(storeFileName);
};

const setupStoreWithPersistance = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${storeFileName}\n`)
  );
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreWithPersistanceString).to(storeFileName);
  success(storeFileName);

  shell.mkdir('src/store');
  const localStorageFileName = 'src/store/localStorage.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${localStorageFileName}\n`)
  );
  shell.touch(localStorageFileName);
  shell.ShellString(localStorageString).to(localStorageFileName);
  success(localStorageFileName);
};

const setupReducers = () => {
  shell.mkdir('src/reducers');
  const reducersFileName = 'src/reducers/index.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${reducersFileName}\n`)
  );
  shell.touch(reducersFileName);
  shell.ShellString(rootReducerString).to(reducersFileName);
  success(reducersFileName);
};

const setupActions = () => {
  shell.mkdir('src/actions');
  const actionsFileName = 'src/actions/index.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${actionsFileName}\n`)
  );
  shell.ShellString(actionsString).to(actionsFileName);
  shell.touch(actionsFileName);

  success(actionsFileName);
};

const setupConstants = () => {
  shell.mkdir('src/constants');
  const constantsFileName = 'src/constants/index.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${constantsFileName}\n`)
  );
  shell.ShellString(actionsString).to(constantsFileName);
  shell.touch(constantsFileName);

  success(constantsFileName);
};

const setupIndexWithRedux = () => {
  const indexFileName = 'src/index.js';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${indexFileName}\n`)
  );
  shell.ShellString(indexWithReduxString).to(indexFileName);
  success(indexFileName);
};

const setupComponents = () => {
  const components = 'src/components';
  console.log(
    chalk.white('Creating '),
    chalk.white.cyan.bold(`${components}\n`)
  );
  shell.mkdir(components);
  success(components);
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
      chalk.white.cyan.bold(`lodash.throttle\n`)
    );
    shell.exec('yarn add lodash.throttle');
    setupStoreWithPersistance();
  } else {
    setupStore();
  }
};

module.exports = setupRedux;
