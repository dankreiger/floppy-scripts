#!/usr/bin/env node

const shell = require('shelljs');
const reduxStoreString = require('./../../stringConstants/reduxStoreString');
const rootReducerString = require('./../../stringConstants/rootReducerString');
const actionsString = require('./../../stringConstants/actionsString');
const success = require('./../prompts/success');
const setupAbsoluteImports = require('./setupAbsoluteImports');

const setupStore = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreString).to(storeFileName);
  success(storeFileName);
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

const setupRedux = () => {
  setupAbsoluteImports();
  setupStore();
  setupReducers();
  setupActions();
};

module.exports = setupRedux;
