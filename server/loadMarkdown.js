var fs = require('fs');

module.exports = function(db){
  var normalizedPath = require('path').join(__dirname, '../markdown/');
  fs.readdirSync(normalizedPath).forEach(function(file) {
    console.log(file);
    var html = fs.readFileSync(normalizedPath + file);

    var name = file.split('.').slice(0,-1);

    var db_entry = db('markdown').chain().find({name: name});
    if(db_entry){
      console.log('in db');
      db_entry.assign({
        name: name,
        html: html
      });
    } else {
      console.log('NOT in db');
      db('markdown').push({
        name: name,
        html: html
      });

    }
  });


};
