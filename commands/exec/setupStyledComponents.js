#!/usr/bin/env node

const shell = require('shelljs');
const appStyles = require('./../../stringConstants/appStyles');

const setupStyledComponents = () => {
  shell.exec('yarn add styled-components');
  shell.mkdir('src/App');
  shell.touch('src/App/App.styles.js');
  shell.ShellString(appComponent).to('src/App/App.styles.js');
  shell.touch(storeFileName);
  shell.ShellString(appStyles).to(storeFileName);
};

module.exports = setupStyledComponents;
