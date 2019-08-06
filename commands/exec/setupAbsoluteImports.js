#!/usr/bin/env node

const shell = require('shelljs');
const jsConfigString = require('./../../stringConstants/jsconfig');
const success = require('../prompts/success');

const setupAbsoluteImports = () => {
  const fileName = 'jsconfig.json';
  shell.touch(fileName);
  shell.ShellString(jsConfigString).to(fileName);
  success(fileName);
};

module.exports = setupAbsoluteImports;
