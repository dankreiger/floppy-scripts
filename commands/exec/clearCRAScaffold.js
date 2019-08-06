#!/usr/bin/env node

const shell = require('shelljs');
const appComponentString = require('./../../stringConstants/appComponentString');

const clearCRAScaffold = () => {
  shell.rm('src/logo.svg');
  shell.rm('src/App.css');
  shell.rm('src/App.js');
  shell.rm('src/App.test.js');
  shell.touch('src/App.js');
  shell.ShellString(appComponentString).to('src/App.js');
};

module.exports = clearCRAScaffold;
