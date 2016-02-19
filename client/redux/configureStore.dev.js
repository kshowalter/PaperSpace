import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from './reducer';
import DevTools from './DevTools';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
//const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  //DevTools.instrument()
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  //persistState(getDebugSessionKey())

  //typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

  window.devToolsExtension ? window.devToolsExtension() : f => f

)(createStore);


//function getDebugSessionKey() {
//  // You can write custom logic here!
//  // By default we try to read the key from ?debug_session=<key> in the address bar
//  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
//  return (matches && matches.length > 0)? matches[1] : null;
//}

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
