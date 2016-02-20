<info-page>


  <div>info: {opts.state.count}</div>
  <div><span class='button' onClick={click}>click</span></div>

  <script>
    //console.log(opts);
    this.click = function click(e){
      console.log('click', e);
      opts.dispatch( opts.actions.step() );
    }
  </script>

</info-page>
