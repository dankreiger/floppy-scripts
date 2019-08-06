#!/usr/bin/env node

const shell = require('shelljs');

const setupRedux = () => {
  shell.mkdir('store');
  const storeFileName = 'store/store.js';
  shell.touch(storeFileName);
  shell.ShellString(jsConfigString).to(storeFileName);
};

module.exports = setupRedux;
