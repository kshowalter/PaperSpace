import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
//const loggerMiddleware = createLogger();


const createStoreWithMiddleware = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  )

)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
