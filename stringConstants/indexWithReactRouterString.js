const indexWithReactRouterString = `import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import store from './store/store';

import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

/* using hash router for static deploy */
ReactDOM.render(
  <Provider store={store}>
    {process.env.NODE_ENV === 'production' ? (
      <HashRouter basename="/">
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
`;

module.exports = indexWithReactRouterString;
