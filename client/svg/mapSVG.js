import $ from 'npm-zepto';

module.exports = function(){
  var svg_document = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg_document.setAttribute('xmlns','http://www.w3.org/2000/svg');
  svg_document.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
  //svg_document.setAttribute('width', settings.drawing_settings.size.drawing.w);
  //svg_document.setAttribute('height', settings.drawing_settings.size.drawing.h);
  //svg_document.setAttribute('x', 0);
  //svg_document.setAttribute('y', 0);
  //svg_document.setAttribute('x', 0);
  //svg_document.setAttribute('y', 0);
  //var view_box = '0 0 1000 1000';
  //svg_document.setAttribute('viewBox', view_box);

  var svg = $(svg_document);
  svg.append(
    $('<rect>', {
      'x': 100,
      'y': 100,
      'width': 100,
      'height': 100
    })
  ).append(
    $('<cicle>', {
      'cx': 60,
      'cy': 60,
      'r': 60
    })
  );


  return svg;
};
