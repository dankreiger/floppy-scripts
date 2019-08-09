#!/usr/bin/env node

// prompts
const init = require('../commands/prompts/init');
const floppyBase = require('./floppyBase');

const addOn = async () => {
  // show script introduction
  init();
  floppyBase();
};

addOn();