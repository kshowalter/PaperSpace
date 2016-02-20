import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  //DevTools.instrument()
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  //persistState(getDebugSessionKey())

  //typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

  window.devToolsExtension ? window.devToolsExtension() : f => f

)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
