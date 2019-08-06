#!/usr/bin/env node

// imports
const shell = require('shelljs');
const chalk = require('chalk');

// prompts
const init = require('./commands/prompts/init');
const {
  askQuestions,
  reduxQuestions
} = require('./commands/prompts/askQuestions');
const {
  CODE_FORMATTING_HOOKS,
  ABSOLUTE_IMPORTS,
  REDUX,
  CLEAR_CRA_SCAFFOLD,
  PROPTYPES_FOLDER,
  ENZYME
} = require('./commands/prompts/askQuestions').questionsConstants;
const askVersioning = require('./commands/prompts/askVersioning');

// exec commands

const setupCodeFormattingHooks = require('./commands/exec/setupCodeFormattingHooks');
const setupAbsoluteImports = require('./commands/exec/setupAbsoluteImports');
const setupEnzyme = require('./commands/exec/setupEnzyme');
const setupRedux = require('./commands/exec/setupRedux');
const clearCRAScaffold = require('./commands/exec/clearCRAScaffold');
const propTypesFolder = require('./commands/exec/propTypesFolder');

const run = async () => {
  // show script introduction
  init();
  // ask questions
  await askVersioning();
  const answers = await askQuestions();

  shell.exec('yarn add --dev sort-package-json');
  const { OPTIONS } = answers;

  if (OPTIONS.includes(CODE_FORMATTING_HOOKS)) {
    console.log(chalk.white.cyan.bold(`Setting up code formatting...`));
    setupCodeFormattingHooks();
  }

  if (OPTIONS.includes(ABSOLUTE_IMPORTS)) {
    console.log(chalk.white.cyan.bold(`Setting up absolute imports...`));
    setupAbsoluteImports();
  }

  if (OPTIONS.includes(CLEAR_CRA_SCAFFOLD)) {
    console.log(chalk.white.cyan.bold(`Cleaning CRA...`));
    clearCRAScaffold();
  }

  if (OPTIONS.includes(ENZYME)) {
    console.log(chalk.white.cyan.bold(`Setting up Enzyme...`));
    setupEnzyme();
  }

  if (OPTIONS.includes(PROPTYPES_FOLDER)) {
    console.log(chalk.white.cyan.bold(`Creating prop types directory...`));
    propTypesFolder();
  }
  // todo
  if (OPTIONS.includes(REDUX)) {
    console.log(chalk.white.cyan.bold(`Setting up Redux...`));

    const reduxAnswers = await reduxQuestions();
    const { REDUX_OPTIONS } = reduxAnswers;
    shell.exec('yarn add redux react-redux redux-thunk');

    if (REDUX_OPTIONS === 'Yes') {
      setupRedux(true);
    } else {
      setupRedux();
    }
  }

  shell.exec('npx sort-package-json');
  shell.exec('yarn add --dev prettier');
  shell.exec('prettier --single-quote --write src/* src/**/*');
};
run();
