#!/usr/bin/env node

const shell = require('shelljs');
const setupTestsSimple = require('./../../stringConstants/setupTestsSimple');

const setupEnzyme = () => {
    const baseDir = 'src';
    const fileName = 'setupTests.js';

    shell.exec('yarn add --dev enzyme enzyme-adapter-react-16');

    shell.touch(`${baseDir}/${fileName}`);
    shell.ShellString(setupTestsSimple).to(fileName);
    success(fileName);
  };
  
  module.exports = setupEnzyme;
  