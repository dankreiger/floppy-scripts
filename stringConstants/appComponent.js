const appComponent = `import React from 'react';
import { AppWrapper } from './App.styles';
function App() {

  return (
    <AppWrapper>
      floppy soft ears
    </AppWrapper>
  );
}
export default App;`;

const appIndex = `
import App from './App';

export default App;`;

module.exports = { appComponent, appIndex };
