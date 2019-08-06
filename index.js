#!/usr/bin/env node

// imports
const shell = require('shelljs');

// prompts
const init = require('./commands/prompts/init');
const {
  askQuestions,
  reduxQuestions
} = require('./commands/prompts/askQuestions');
const {
  CODE_FORMATTING_HOOKS,
  ABSOLUTE_IMPORTS,
  REDUX
} = require('./commands/prompts/askQuestions').questionsConstants;

const success = require('./commands/prompts/success');

// exec commands

const setupCodeFormattingHooks = require('./commands/exec/setupCodeFormattingHooks');
const setupAbsoluteImports = require('./commands/exec/setupAbsoluteImports');

const run = async () => {
  // show script introduction
  init();
  // ask questions
  const answers = await askQuestions();

  shell.exec('yarn add --dev sort-package-json');

  const { OPTIONS } = answers;
  let filename;

  if (OPTIONS.includes(CODE_FORMATTING_HOOKS)) {
    setupCodeFormattingHooks();
  }

  if (OPTIONS.includes(ABSOLUTE_IMPORTS)) {
    setupAbsoluteImports();
  }

  // todo
  if (OPTIONS.includes(REDUX)) {
    const reduxAnswers = await reduxQuestions();
    const { REDUX_OPTIONS } = reduxAnswers;
    shell.exec('yarn add redux react-redux redux-thunk');

    if (REDUX_OPTIONS === 'Yes') {
      shell.exec('yarn add lodash.throttle');
    } else {
    }
  }

  shell.exec('npx sort-package-json');
};
run();
