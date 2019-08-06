#!/usr/bin/env node

const inquirer = require('inquirer');

const questionsConstants = {
  ABSOLUTE_IMPORTS: 'ABSOLUTE_IMPORTS',
  CLEAR_CRA_SCAFFOLD: 'CLEAR_CRA_SCAFFOLD',
  CODE_FORMATTING_HOOKS: 'CODE_FORMATTING_HOOKS',
  COMMITLINT: 'COMMITLINT',
  ENZYME: 'ENZYME',
  STYLED_COMPONENTS: 'STYLED_COMPONENTS',
  REDUX: 'REDUX'
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
        questionsConstants.STYLED_COMPONENTS,
        questionsConstants.REDUX
      ]
    }
  ];
  return inquirer.prompt(questions);
};

const reduxQuestions = () => {
  const questions = [
    {
      type: 'list',
      name: 'REDUX_OPTIONS',
      message: 'Do you need local storage persistence?',
      choices: ['Yes', 'No']
    }
  ];
  return inquirer.prompt(questions);
};

module.exports = { askQuestions, reduxQuestions, questionsConstants };
