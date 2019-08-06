#!/usr/bin/env node

const shell = require('shelljs');

const setupStore = () => {
  shell.mkdir('src/store');
  const storeFileName = 'src/store/store.js';
  shell.touch(storeFileName);
  shell.ShellString(jsConfigString).to(storeFileName);
};

const setupReducers = () => {
  shell.mkdir('src/reducers');
  const storeFileName = 'src/reducers/index.js';
  shell.touch(storeFileName);
  shell.ShellString(jsConfigString).to(storeFileName);
};

const setupRedux = () => {
  setupStore();
  setupReducers();
  setupActions();
};

module.exports = setupRedux;
