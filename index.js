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
const askCI = require('./commands/prompts/askCI');

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
  // preliminary versioning
  await askVersioning();
  // CI setup
  await askCI();
  // ask questions
  const answers = await askQuestions();

  shell.exec('yarn add --dev sort-package-json');
  const { OPTIONS } = answers;

  if (OPTIONS.includes(CODE_FORMATTING_HOOKS)) {
    console.log(chalk.white.cyan.bold(`\n\nSetting up code formatting...\n`));
    setupCodeFormattingHooks();
  }

  if (OPTIONS.includes(ABSOLUTE_IMPORTS)) {
    console.log(chalk.white.cyan.bold(`\n\nSetting up absolute imports...\n`));
    setupAbsoluteImports();
  }

  if (OPTIONS.includes(CLEAR_CRA_SCAFFOLD)) {
    console.log(chalk.white.cyan.bold(`\n\nCleaning CRA...\n`));
    clearCRAScaffold();
  }

  if (OPTIONS.includes(ENZYME)) {
    console.log(chalk.white.cyan.bold(`\n\nSetting up Enzyme...\n`));
    setupEnzyme();
  }

  if (OPTIONS.includes(PROPTYPES_FOLDER)) {
    console.log(
      chalk.white.cyan.bold(`\n\nCreating prop types directory...\n`)
    );
    propTypesFolder();
  }
  // todo
  if (OPTIONS.includes(REDUX)) {
    console.log(chalk.white.cyan.bold(`\n\nSetting up Redux...\n`));

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
