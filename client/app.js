import io from 'socket.io-client';
import riot from 'riot';
import Chance from 'chance';
var chance = Chance.Chance();

window.global = window;
window._ = require('lodash');
window.storage = sessionStorage;
window.g = {};

var riotActions = riot.observable();

import store from './store/store';

import './app.tag';
import './templates/info-page.tag';
import './templates/instructions.tag';

store.actions.initialize();


//var Freezer = require('freezer-js');
//var freezer = new Freezer(initState);

var socket = io();
g.socket = socket;
g.path = __dirname;

socket.on('connect', function(){
  socket.on('server_says', function(msg){
    console.log(msg);
  });

  var save = chance.d20();
  console.log('Your saving throw:', save );
  socket.emit('save_throw', save);

});


window.onload = function(){
  //console.log('page loaded');

  var doc = document.createElement('app');
  doc.className = 'app';
  document.body.appendChild(doc);

  riot.mount('app', {
    store: store,
    riotActions: riotActions
  });
  riot.route.start(true);
  //riot.compile(function() {
  //});

};


require('./templates/info-page.tag');
require('./templates/instructions.tag');
require('./templates/map.tag');
require('./templates/raw.tag');


<app>

  <div class='topBar'/web>
    <a each={ state.pageNames } class='button' href="#{ title }">{ title }</a>
  </div>
  $('<div>',{
    class: 'topBar'
    }).append($('<a>',{
      class: 'button',
      href: '#'+title,
      text: title
    }));

  <div class ='mainSection'>
    <h3>Page: {state.pageName}</h3>

    <div show={ state.pageName === 'instructions' }>
      <instructions state={state} actions={store.actions}></instructions>
    </div>

    <div show={ state.pageName==='map' }>
      <map state={state} actions={store.actions}></map>
    </div>

    <div show={ state.pageName==='info' }>
      <info-page state={state} actions={store.actions}></info-page>
    </div>


  var self = this;
  this.store = opts.store;
  this.state = this.store.getState();
  this.riotActions = opts.riotActions;

  //console.log(this.state);

  riot.route(function() {
    //state.pageName = arguments[0];
    //console.log(arguments[0]);
    self.store.actions.selectPage(arguments[0]);
    //self.update();
  });

  this.riotActions.on('test', function(input){
    console.log('test', input);
  });

  this.store.subscribe(function(){
    self.state = self.store.getState();
    //console.log(self.state);
    self.update();
  })
