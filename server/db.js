module.exports = function(){
  var low = require('lowdb');
  var storage = require('lowdb/file-sync');
  var normalizedPath = require('path').join(__dirname, '../db/');

  var db = low( normalizedPath+'db.json', { storage:storage });


  return db;
};
