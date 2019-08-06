#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');

const commitlintString = require('../../stringConstants/commitlint');
const success = require('../prompts/success');

const setupCodeFormattingHooks = () => {
  console.log(
    chalk.white.bold('Installing'),
    chalk.cyan.bold(`@commitlint/cli, @commitlint/config-conventional\n`)
  );

  shell.exec('yarn add --dev @commitlint/cli @commitlint/config-conventional');

  console.log(chalk.cyan.bold('\nSetting up package json hooks\n'));

  shell.exec(
    `npx json --in-place -f package.json -e 'this.husky={"hooks": { "pre-commit": "lint-staged", "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"} }'`
  );
  shell.exec(
    `npx json --in-place -f package.json -e 'this["lint-staged"]={"src/**/*.{js,tsx,jsx,json,css}": ["prettier --single-quote --write", "git add"]}'`
  );

  console.log(
    chalk.white.bold('\nInstalling'),
    chalk.cyan.bold(`prettier, lint-staged, husky\n`)
  );

  shell.exec('yarn add --dev prettier lint-staged husky');

  const fileName = 'commitlint.config.js';
  shell.touch(fileName);
  shell.ShellString(commitlintString).to(fileName);
  success(fileName);
};

module.exports = setupCodeFormattingHooks;
