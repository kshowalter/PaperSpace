import riot from 'riot';
import './app.tag';
import './templates/info-page.tag';
var riotActions = riot.observable();




import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer.js';

import * as actions from './redux/actions';

import initState from './initState';
import configureStore from './redux/configureStore';

//var Freezer = require('freezer-js');
//var freezer = new Freezer(initState);

let store = configureStore(initState);

store.dispatch(actions.initialize());




window.onload = function(){
  console.log('page loaded');

  var doc = document.createElement('app');
  doc.className = 'app';
  document.body.appendChild(doc);

  riot.mount('app', {
    initState: initState,
    store: store,
    actions: actions,
    riotActions: riotActions
  });
  riot.route.start(true);
  //riot.compile(function() {
  //});

  store.dispatch( actions.step(3) );

};
