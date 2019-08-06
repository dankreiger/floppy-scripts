#!/usr/bin/env node

const shell = require('shelljs');
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
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreString).to(storeFileName);
  success(storeFileName);
};
const setupStoreWithPersistance = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreWithPersistanceString).to(storeFileName);
  success(storeFileName);

  shell.mkdir('src/store');
  const localStorageFileName = 'src/store/localStorage.js';
  shell.touch(localStorageFileName);
  shell.ShellString(localStorageString).to(localStorageFileName);
  success(localStorageFileName);
};

const setupReducers = () => {
  shell.mkdir('src/reducers');
  const reducersFileName = 'src/reducers/index.js';
  shell.touch(reducersFileName);
  shell.ShellString(rootReducerString).to(reducersFileName);
  success(reducersFileName);
};

const setupActions = () => {
  shell.mkdir('src/actions');
  const actionsFileName = 'src/actions/index.js';
  shell.ShellString(actionsString).to(actionsFileName);
  shell.touch(actionsFileName);

  success(actionsFileName);
};

const setupIndexWithRedux = () => {
  const indexFileName = 'src/index.js';
  shell.ShellString(indexWithReduxString).to(indexFileName);
  success(indexFileName);
};

const setupComponents = () => {
  const components = 'src/components';
  shell.mkdir(components);
  success(components);
};

const setupRedux = persistedState => {
  setupAbsoluteImports();
  setupStore();
  setupReducers();
  setupActions();
  setupComponents();
  setupIndexWithRedux();
  if (persistedState) {
    setupStoreWithPersistance();
  } else {
    setupStore();
  }
};

module.exports = setupRedux;
