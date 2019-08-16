#!/usr/bin/env node

const shell = require('shelljs');

const makeCodeNice = () => {
  shell.exec(`   
  declare file="package.json"
  declare regex="\s+prettier\s+"

  declare file_content=$( cat "$file" )
  if [[ " $file_content " =~ $regex ]] # please note the space before and after the file content
      then
          echo ""
      else
      yarn add --dev prettier
    fi
  exit
`);
  shell.exec('npx prettier --single-quote --write src/* src/**/*');
};

module.exports = makeCodeNice;
