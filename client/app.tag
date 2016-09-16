require('./templates/info-page.tag');
require('./templates/instructions.tag');
require('./templates/map.tag');
require('./templates/raw.tag');


<app>

  <div class='topBar'/web>
    <a each={ state.pageNames } class='button' href="#{ title }">{ title }</a>
  </div>

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

  </div>

  <script>
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

</app>
