#!/usr/bin/env node

const shell = require("shelljs");
const readline = require("readline");
const chalk = require("chalk");

const askAppName = async () => {
  const rl = readline.createInterface({
    input: process.stdin, //or fileStream
    output: process.stdout
  });

  let response;

  rl.setPrompt('What is your app\'s name?: ');
  rl.prompt();

  return new Promise((resolve, reject) => {
    rl.on("line", userInput => {
      response = userInput;
      const fmtResponse = response && response.trim();
      chalk.blue('Note: you need npx and yarn to do this whole thing')
      shell.exec(`npx create-react-app ${fmtResponse || 'app'}`);
      chalk.blue('Changing directory into: ' + shell.pwd())
      shell.cd(fmtResponse);
      rl.close();
    });

    rl.on("close", () => {
      resolve(response);
    });
  });
};

module.exports = askAppName;
