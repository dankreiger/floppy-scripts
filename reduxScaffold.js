const { askForReduxScaffoldName } = require('./commands/prompts/askQuestions');
const makeCodeNice = require('./commands/exec/makeCodeNice');

const name = await askForReduxScaffoldName();
console.log('name', name);
if (name && name.REDUX_STATE_NAME) {
  scaffoldReduxState(name.REDUX_STATE_NAME.trim());
} else {
  scaffoldReduxState('general');
}
makeCodeNice();
