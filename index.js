#!/usr/bin/env node

// imports
const shell = require('shelljs');
const chalk = require('chalk');

// prompts
const init = require('./commands/prompts/init');
const {
  askQuestions,
  reduxQuestions,
  reduxScaffoldQuestions,
  askForReduxScaffoldName
} = require('./commands/prompts/askQuestions');
const {
  CODE_FORMATTING_HOOKS,
  ABSOLUTE_IMPORTS,
  REDUX,
  CLEAR_CRA_SCAFFOLD,
  PROPTYPES_FOLDER,
  ENZYME,
  REACT_ROUTER
} = require('./commands/prompts/askQuestions').questionsConstants;
const askVersioning = require('./commands/prompts/askVersioning');
const askCI = require('./commands/prompts/askCI');

// exec commands

const setupCodeFormattingHooks = require('./commands/exec/setupCodeFormattingHooks');
const setupAbsoluteImports = require('./commands/exec/setupAbsoluteImports');
const setupEnzyme = require('./commands/exec/setupEnzyme');
const setupRedux = require('./commands/exec/setupRedux');
const scaffoldReduxState = require('./commands/exec/scaffoldReduxState');
const clearCRAScaffold = require('./commands/exec/clearCRAScaffold');
const propTypesFolder = require('./commands/exec/propTypesFolder');
const setupReactRouter = require('./commands/exec/setupReactRouter');
const makeCodeNice = require('./commands/exec/makeCodeNice');

const prepareRedux = async () => {
  console.log(chalk.cyan.bold(`\n\nSetting up Redux...\n`));

  const reduxAnswers = await reduxQuestions();
  const reduxScaffold = await reduxScaffoldQuestions();
  const { REDUX_LOCAL_STORAGE_PERSISTENCE } = reduxAnswers;
  const { SCAFFOLD_STATE } = reduxScaffold;
  shell.exec('yarn add redux react-redux redux-thunk');

  if (REDUX_LOCAL_STORAGE_PERSISTENCE === 'Yes') {
    setupRedux(true);
  } else {
    setupRedux();
  }

  if (SCAFFOLD_STATE === 'Yes') {
    const name = await askForReduxScaffoldName();
    console.log('name', name);
    if (name && name.REDUX_STATE_NAME) {
      scaffoldReduxState(name.REDUX_STATE_NAME.trim());
    } else {
      scaffoldReduxState('general');
    }
    makeCodeNice();
  }
};

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
    console.log(chalk.cyan.bold(`\n\nSetting up code formatting...\n`));
    setupCodeFormattingHooks();
  }

  if (OPTIONS.includes(ABSOLUTE_IMPORTS)) {
    console.log(chalk.cyan.bold(`\n\nSetting up absolute imports...\n`));
    setupAbsoluteImports();
  }

  if (OPTIONS.includes(CLEAR_CRA_SCAFFOLD)) {
    console.log(chalk.cyan.bold(`\n\nCleaning CRA...\n`));
    clearCRAScaffold();
  }

  if (OPTIONS.includes(ENZYME)) {
    console.log(chalk.cyan.bold(`\n\nSetting up Enzyme...\n`));
    setupEnzyme();
  }

  if (OPTIONS.includes(PROPTYPES_FOLDER)) {
    console.log(chalk.cyan.bold(`\n\nCreating prop types directory...\n`));
    propTypesFolder();
  }

  if (OPTIONS.includes(REDUX)) {
    await prepareRedux();
  }

  if (OPTIONS.includes(REACT_ROUTER)) {
    console.log(
      chalk.cyan.bold(
        `\n\nSetting up React Router...\n this will also install Redux if you haven't already`
      )
    );
    if (!OPTIONS.includes(REDUX)) {
      await prepareRedux();
    }

    setupReactRouter();
  }

  console.log(chalk.cyan.bold(`\n\nFormatting code...\n`));
  makeCodeNice();
  console.log(chalk.cyan.bold(`\n\nSorting package.json...\n`));
  shell.exec('npx sort-package-json');

  console.log(chalk.white.bgGreen.bold(`Done!`));
  console.log('🐶');
};
run();
