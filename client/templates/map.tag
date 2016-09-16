var $ = require('npm-zepto');
var mapSVG = require('../svg/mapSVG.js')
require('./raw.tag');

<map>


  <raw content={starmapSVG} />


  <script>
    this.grid = [
      [0,0],
      [0,10],
      [10,10],
    ]

    var svg = mapSVG();

    this.starmapSVG = svg.html();


    //this.update();
  </script>
</map>
