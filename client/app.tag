require('./templates/info-page.tag');
var initState = require('./initState');

<app>

  <div class='topBar'>
    <a each={ state.pageNames } class='button' href="#{ title }">{ title }</a>
  </div>

  <div class ='mainSection'>


  </div>
  <h3>Page: {state.pageName}</h3>


  <div if={ state.pageName==='info' }>
    <info-page pageData={state.pageNames}></info-page>

  </div>

  <div if={ pageName==='test' }>
    this is only a test

  </div>



  <script>

    var self = this;

    var state = this.state = opts.initState;

    state.pageName = state.pageName || state.pageNames[0]

    riot.route(function() {
      state.pageName = arguments[0];
      self.update();
    })

    //app_input.on('test', function(input) {
    //  console.log('test', input);
    //});

    //console.log(self);

    opts.actions.on('test', function(input){
      console.log('test', input);
    });

  </script>

  <style scoped>
    :scope {
      display: block;
      font-family: sans-serif;
    }
    nav {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      color: #88d1ff;
      background: #083a47;
      padding: 2px;
      height: 25px;
    }
    nav > a {
      display: inline-block;
      padding: 0 .8em;
    }
    nav > a:not(:first-child) {
      border-left: 1px solid #eee;
    }
  </style>

</app>
