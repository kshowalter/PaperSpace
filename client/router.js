var Router = require('ampersand-router');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'test': 'test'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    console.log('home');
  },

  test: function () {
    console.log('test');
  }

});
