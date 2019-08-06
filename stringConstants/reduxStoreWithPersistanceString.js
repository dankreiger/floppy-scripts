const reduxStoreWithPersistanceString = `
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composedEnhancers);

store.subscribe(
  throttle(() => {
    saveState({ unpostedUserData: store.getState().unpostedUserData });
  }, 1000)
);

export default store;`;

module.exports = reduxStoreWithPersistanceString;
