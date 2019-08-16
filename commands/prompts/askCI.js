#!/usr/bin/env node

const shell = require('shelljs');
const success = require('./success');
const inquirer = require('inquirer');
const {
  travisStringWithDeployment,
  travisStringNoDeployment
} = require('../../stringConstants/travisString');

const askCI = () => {
  // const ciQuestions = [
  //   {
  //     type: 'list',
  //     name: 'deploy',
  //     message: `Do you want to deploy (surge)`,
  //     choices: ['Yes', 'No']
  //   }
  // ];

  // return inquirer.prompt(ciQuestions).then(async ({ deploy }) => {
  const CIfilename = '.travis.yml';

  // if (deploy === 'Yes') {
  //   const deploymentUrl = [
  //     {
  //       type: 'input',
  //       name: 'url',
  //       message: `Enter your deployment url (ex. 'your-app-name.surge.sh')`
  //     }
  //   ];

  //   await inquirer.prompt(deploymentUrl).then(({ url }) => {
  //     console.log('Skip this until it is reliable');
  //     // let u;
  //     // if (!url && !url.length) {
  //     //   u = 'your-app-name.surge.sh';
  //     // }
  //     // u = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
  //     // shell.exec(
  //     //   `npx json --in-place -f package.json -e 'this.homepage="https://${u}"'`
  //     // );
  //     // shell.exec('yarn add surge');
  //     // shell.touch(CIfilename);
  //     // shell.ShellString(travisStringWithDeployment(u)).to(CIfilename);
  //     // success(CIfilename);
  //     shell.touch(CIfilename);
  //     shell.ShellString(travisStringNoDeployment()).to(CIfilename);
  //     success(CIfilename);
  //   });
  // }

  // else {
  shell.touch(CIfilename);
  shell.ShellString(travisStringNoDeployment()).to(CIfilename);
  success(CIfilename);
  // }
  // });
};

module.exports = askCI;
