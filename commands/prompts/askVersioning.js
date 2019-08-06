#!/usr/bin/env node

const shell = require('shelljs');
const success = require('./success');
const inquirer = require('inquirer');

const askVersioning = () => {
  const versioningQuestions = [
    {
      type: 'input',
      name: 'nodeVersion',
      message: "What's your node version?"
    },
    {
      type: 'input',
      name: 'yarnVersion',
      message: "What's your yarn version?"
    }
  ];

  return inquirer.prompt(versioningQuestions).then(answers => {
    shell.touch(`.nvmrc`);
    shell.ShellString(`${answers['nodeVersion']}`).to('.nvmrc');
    success('.nvmrc');

    shell.exec(`
    . ~/.nvm/nvm.sh && nvm use
   `);

    shell.exec(
      `npx json --in-place -f package.json -e 'this.engines={
        "node": "${answers['nodeVersion']}",
        "yarn": "${answers['yarnVersion']}"
      }'`
    );
  });
};

module.exports = askVersioning;
