#!/usr/bin/env node

const inquirer = require('inquirer');

const questionsConstants = {
  ABSOLUTE_IMPORTS: 'ABSOLUTE_IMPORTS',
  CLEAR_CRA_SCAFFOLD: 'CLEAR_CRA_SCAFFOLD',
  CODE_FORMATTING_HOOKS: 'CODE_FORMATTING_HOOKS',
  COMMITLINT: 'COMMITLINT',
  ENZYME: 'ENZYME',
  PROPTYPES_FOLDER: 'PROPTYPES_FOLDER',
  STYLED_COMPONENTS: 'STYLED_COMPONENTS',
  REDUX: 'REDUX',
  REACT_ROUTER: 'REACT_ROUTER'
};

const askQuestions = () => {
  const questions = [
    {
      type: 'checkbox',
      name: 'OPTIONS',
      message: 'What do you need?',
      choices: [
        questionsConstants.ABSOLUTE_IMPORTS,
        questionsConstants.CLEAR_CRA_SCAFFOLD,
        questionsConstants.CODE_FORMATTING_HOOKS,
        questionsConstants.ENZYME,
        questionsConstants.PROPTYPES_FOLDER,
        questionsConstants.STYLED_COMPONENTS,
        questionsConstants.REDUX,
        questionsConstants.REACT_ROUTER
      ]
    }
  ];
  return inquirer.prompt(questions);
};

const reduxQuestions = () => {
  const questions = [
    {
      type: 'list',
      name: 'REDUX_LOCAL_STORAGE_PERSISTENCE',
      message: 'Do you need local storage persistence?',
      choices: ['Yes', 'No']
    }
  ];
  return inquirer.prompt(questions);
};

const reduxScaffoldQuestions = () => {
  const questions = [
    {
      type: 'list',
      name: 'SCAFFOLD_STATE',
      message: 'Do you want to scaffold some redux state?',
      choices: ['Yes', 'No']
    }
  ];
  return inquirer.prompt(questions);
};

const askForReduxScaffoldName = () => {
  const questions = [
    {
      type: 'input',
      name: 'REDUX_STATE_NAME',
      message: `What's the name of your reducer?`
    }
  ];
  return inquirer.prompt(questions);
};

module.exports = {
  askQuestions,
  reduxQuestions,
  questionsConstants,
  reduxScaffoldQuestions,
  askForReduxScaffoldName
};
