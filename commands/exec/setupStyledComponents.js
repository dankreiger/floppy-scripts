#!/usr/bin/env node

const shell = require('shelljs');
const appStyles = require('./../../stringConstants/appStyles');
const success = require('./../prompts/success');

const setupStyledComponents = () => {
  shell.exec('yarn add styled-components');
  shell.mkdir('src/App');

  const filename = 'src/App/App.styles.js';
  shell.touch(filename);
  shell.ShellString(appStyles).to(storeFileName);
  success(fileName);
};

module.exports = setupStyledComponents;
