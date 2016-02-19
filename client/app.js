import riot from 'riot';


import './app.tag';
import initState from './initState';
//console.log(initState);

var actions = riot.observable();

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer.js';

import * as actions from from './redux/actions';

import configureStore from './redux/configureStore';

import initState from './initState';
//var initStateImmutable = Immutable.fromJS(initState);
//let store = configureStore(initStateImmutable);

var Freezer = require('freezer-js');
var freezer = new Freezer(initState);

let store = configureStore(initState);




var n = 0;
window.setInterval(function(){
  //console.log(n);
  actions.trigger('test', n);
  n++;
}, 1000);


window.onload = function(){
  console.log('page loaded');

  var doc = document.createElement('app');
  doc.className = 'app';
  document.body.appendChild(doc);

  riot.mount('app', {
    initState: initState,
    actions: actions
  });
  riot.route.start(true);
  //riot.compile(function() {
  //});

};
