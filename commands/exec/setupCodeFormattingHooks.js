#!/usr/bin/env node

const shell = require('shelljs');
const commitlintString = require('../../stringConstants/commitlint');
const success = require('../prompts/success');

const setupCodeFormattingHooks = () => {
  const fileName = 'commitlint.config.js';
  shell.touch(fileName);
  shell.ShellString(commitlintString).to(fileName);
  success(fileName);
  shell.exec('yarn add --dev @commitlint/cli @commitlint/config-conventional');

  fileName = 'commitlint.config.js';
  shell.touch(fileName);
  shell.ShellString(commitlintString).to(fileName);
  success(fileName);

  shell.exec(
    `npx json --in-place -f package.json -e 'this.husky={"hooks": { "pre-commit": "lint-staged", "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"} }'`
  );
  shell.exec('yarn add --dev prettier lint-staged husky');
};

module.exports = setupCodeFormattingHooks;
