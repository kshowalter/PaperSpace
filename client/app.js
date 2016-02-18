console.log('app');
var riot = require('riot');

var router = require('./router');
console.log('router', router);


require('./app.tag');

window.onload = function(){
  console.log('page loaded');

  var doc = document.createElement('app');
  doc.className = 'app';
  document.body.appendChild(doc);

  riot.mount('*');
};
