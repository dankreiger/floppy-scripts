#!/usr/bin/env node

// prompts
const init = require('./../commands/prompts/init');
const floppyBase = require('./floppyBase');
const askAppName = require('./../commands/prompts/askAppName');

const completeRun = async () => {
  // show script introduction
  init();

  // ask app name and install create react app
  await askAppName();

  floppyBase();
};

completeRun();