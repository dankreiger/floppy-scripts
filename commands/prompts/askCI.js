#!/usr/bin/env node

const shell = require('shelljs');
const success = require('./success');
const inquirer = require('inquirer');
const {
  travisStringWithDeployment,
  travisStringNoDeployment
} = require('../../stringConstants/travisString');

const askCI = () => {
  const ciQuestions = [
    {
      type: 'list',
      name: 'deploy',
      message: `Do you want to deploy (surge)`,
      choices: ['Yes', 'No']
    }
  ];

  return inquirer.prompt(ciQuestions).then(async ({ deploy }) => {
    const CIfilename = '.travis.yml';

    if (deploy === 'Yes') {
      const deploymentUrl = [
        {
          type: 'input',
          name: 'url',
          message: `Enter your deployment url (ex. 'your-app-name.surge.sh')`
        }
      ];

      await inquirer.prompt(deploymentUrl).then(({ url }) => {
        shell.touch(CIfilename);
        shell.ShellString(travisStringWithDeployment(url)).to(CIfilename);
        success(CIfilename);
      });
    } else {
      shell.touch(CIfilename);
      shell.ShellString(travisStringNoDeployment()).to(CIfilename);
      success(CIfilename);
    }
  });
};

module.exports = askCI;
