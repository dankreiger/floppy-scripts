#!/usr/bin/env node

const shell = require('shelljs');
const success = require('../prompts/success');

const propTypesFolder = () => {
  const folder = 'src/types';
  shell.mkdir('src/types');
  success(folder);
};

module.exports = propTypesFolder;
