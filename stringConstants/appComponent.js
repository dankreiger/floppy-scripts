const appComponent = `import React from 'react';
import { AppContainer } from './App.styles';
function App() {

  return (
    <AppContainer>
      floppy soft ears
    </AppContainer>
  );
}
export default App;`;

const appIndex = `
import App from './App';

export default App;`;

module.exports = { appComponent, appIndex };
