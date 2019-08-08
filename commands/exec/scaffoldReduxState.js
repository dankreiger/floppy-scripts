#!/usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');

const scaffoldReduxState = reducerName => {
  console.log(
    chalk.white('Scaffolding does not work as an independent command yet...\n')
  );
  const importLine = shell.exec(
    `
    sed -e "/import /s/$/ import ${reducerName}Reducer from 'reducers\\\/${reducerName}\\\.reducer\\\.js' /" src/reducers/index.js`
  );
  shell.ShellString(importLine).to('src/reducers/index.js');

  const puppy = shell.exec(
    `sed -e "/export default combineReducers({/s/$/ ${reducerName}Reducer, /" src/reducers/index.js`
  );

  shell.ShellString(puppy).to('src/reducers/index.js');

  const importLineActions = shell.exec(
    `
    sed -e "/import /s/$/ import * as ${reducerName}Actions from 'actions\\\/${reducerName}\\\.actions\\\.js' /" src/actions/index.js`
  );
  shell.ShellString(importLineActions).to('src/actions/index.js');

  shell.touch(`src/reducers/${reducerName}.reducer.js`);
  shell.touch(`src/actions/${reducerName}.actions.js`);

  const initialState = `${reducerName}InitialState`;
  const reducerString = `
  
  export const ${initialState} = {
    items: []
  };
    const ${reducerName}Reducer = (state = ${initialState}, action) => {
      const { type, payload } = action;
      switch (type) {
        default:
          return state;
      }
    };
    export default ${reducerName}Reducer;  
  
    `;

  shell.ShellString(reducerString).to(`src/reducers/${reducerName}.reducer.js`);
};

module.exports = scaffoldReduxState;
