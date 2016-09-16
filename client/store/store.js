import initState from './initState';
import configureStore from './configureStore';
import * as actions from './actions';

let reduxStore = configureStore(initState);

var store = {
  actions: Object.assign(actions, {
    dispatch: function(action){
      reduxStore.dispatch(action);
    }.bind(this)
  }),
  getState: function(){
    return this.reduxStore.getState();
  },
  subscribe: function(func){
    this.reduxStore.subscribe(func);
  },
  reduxStore: reduxStore

};


export default store;
