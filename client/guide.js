import guideHTML from './guide.md';

console.log('/ webpage \\');
console.log('\\ guide   /');

window.onload = function(){
  console.log('page loaded');

  var doc = document.createElement('div');
  doc.className = 'doc';
  doc.innerHTML = guideHTML;
  document.body.appendChild(doc);

};
