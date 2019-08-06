#!/usr/bin/env node

const shell = require('shelljs');
const chalk = require('chalk');

const commitlintString = require('../../stringConstants/commitlint');
const success = require('../prompts/success');

const setupCodeFormattingHooks = () => {
  console.log(
    `${chalk.white.bold('Installing')} ${chalk.white.orange.bold(
      `@commitlint/cli, @commitlint/config-conventional`
    )}`
  );

  shell.exec('yarn add --dev @commitlint/cli @commitlint/config-conventional');

  console.log(`${chalk.white.bold('Setting up package json hooks')}`);

  shell.exec(
    `npx json --in-place -f package.json -e 'this.husky={"hooks": { "pre-commit": "lint-staged", "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"} }'`
  );
  shell.exec(
    `npx json --in-place -f package.json -e 'this.lint-staged={"src/**/*.{js,tsx,jsx,json,css}": [
      "prettier --single-quote --write",
      "git add"
    ]'`
  );

  console.log(
    `${chalk.white.bold('Installing')} ${chalk.white.orange.bold(
      `prettier, lint-staged, husky`
    )}`
  );

  shell.exec('yarn add --dev prettier lint-staged husky');

  const fileName = 'commitlint.config.js';
  shell.touch(fileName);
  shell.ShellString(commitlintString).to(fileName);
  success(fileName);
};

module.exports = setupCodeFormattingHooks;
