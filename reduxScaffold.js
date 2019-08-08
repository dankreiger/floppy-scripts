#!/usr/bin/env node

const { askForReduxScaffoldName } = require('./commands/prompts/askQuestions');
const makeCodeNice = require('./commands/exec/makeCodeNice');
const scaffoldReduxState = require('./commands/exec/scaffoldReduxState');

const run = async () => {
  const name = await askForReduxScaffoldName();
  console.log('name', name);
  if (name && name.REDUX_STATE_NAME) {
    scaffoldReduxState(name.REDUX_STATE_NAME.trim());
  } else {
    scaffoldReduxState('general');
  }
  makeCodeNice();
};
run();
