#!/usr/bin/env node

const shell = require('shelljs');
const {
  appComponent,
  appIndex
} = require('../../stringConstants/appComponent');

const clearCRAScaffold = () => {
  shell.rm('src/logo.svg');
  shell.rm('src/App.css');
  shell.rm('src/App.js');
  shell.rm('src/App.test.js');
  shell.mkdir('src/App');
  shell.touch('src/App/App.js');
  shell.touch('src/App/index.js');
  shell.ShellString(appComponent).to('src/App/App.js');
  shell.ShellString(appIndex).to('src/App/index.js');
};

module.exports = clearCRAScaffold;
