#!/usr/bin/env node

const shell = require('shelljs');
const reduxStoreString = require('./../../stringConstants/reduxStoreString');
const rootReducerString = require('./../../stringConstants/rootReducerString');

const setupStore = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';
  shell.touch(storeFileName);
  shell.ShellString(reduxStoreString).to(storeFileName);
};

const setupReducers = () => {
  shell.mkdir('src/reducers');
  const storeFileName = 'src/reducers/index.js';
  shell.touch(storeFileName);
  shell.ShellString(rootReducerString).to(storeFileName);
};

const setupReducers = () => {
  shell.mkdir('src/actions');
  const storeFileName = 'src/actions/index.js';
  shell.touch(storeFileName);
};

const setupRedux = () => {
  setupStore();
  setupReducers();
  setupActions();
};

module.exports = setupRedux;
