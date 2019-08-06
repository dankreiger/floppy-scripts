#!/usr/bin/env node

const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const success = require('./success');

const askVersioning = () => {
  const currentNodeVersion = shell.exec('node -v | cut -c 2-').stdout.trim();
  const currentYarnVersion = shell.exec('yarn -v').stdout.trim();
  console.log('\n no yarn, no puppy this time\n\n');
  console.log(
    '\n you must install yarn first: ',
    chalk.white.bgGreen.bold('npm install -g yarn')
  );

  const versioningQuestions = [
    {
      type: 'input',
      name: 'nodeVersion',
      message: `What's your node version? (${currentNodeVersion})`
    },
    {
      type: 'input',
      name: 'yarnVersion',
      message: `What's your yarn version? (${currentYarnVersion})`
    }
  ];

  return inquirer
    .prompt(versioningQuestions)
    .then(({ nodeVersion, yarnVersion }) => {
      let nv = nodeVersion || currentNodeVersion;
      let yv = yarnVersion || currentYarnVersion;
      shell.touch(`.nvmrc`);
      shell.ShellString(nv).to('.nvmrc');
      success('.nvmrc');

      shell.exec(`
    . ~/.nvm/nvm.sh && nvm use
   `);

      shell.exec(
        `npx json --in-place -f package.json -e 'this.engines={
        "node": "${nv}",
        "yarn": "${yv}"
      }'`
      );
    });
};

module.exports = askVersioning;
