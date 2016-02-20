require('./templates/info-page.tag');

<app>

  <div class='topBar'/web>
    <a each={ state.pageNames } class='button' href="#{ title }">{ title }</a>
  </div>

  <div class ='mainSection'>
    <h3>Page: {state.pageName}</h3>

    <div show={ state.pageName==='info' }>
      <info-page state={state} actions={opts.actions} dispatch={opts.store.dispatch}></info-page>

    </div>

    <div show={ pageName === 'test' }>
      this is only a test

    </div>

  </div>


  <script>

    var self = this;

    var state = opts.initState;
    var store = opts.store;
    var actions = opts.actions;
    var riotActions = opts.riotActions;


    riot.route(function() {
      //state.pageName = arguments[0];
      store.dispatch( actions.selectPage(arguments[0]) );
      //self.update();
    });

    riotActions.on('test', function(input){
      console.log('test', input);
    });

    store.subscribe(function(){
      self.state = opts.store.getState();
      console.log(state);
      self.update();
    })



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
