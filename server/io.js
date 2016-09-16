var chance = require('chance').Chance();

module.exports = function(server, db){
  var io = require('socket.io')(server);
  io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('save_throw', function(saveThrow){
      var difficulty = chance.d20();
      if( saveThrow === 1 ) {
        var trapDamage = chance.rpg('2d6', {sum: true});
        var fallDamage = chance.rpg('1d10', {sum: true});
        io.emit('server_says', 'You take '+trapDamage+' points of damage... then fall into a pit and take '+fallDamage+' fall damage.');
      } else if ( saveThrow === 20 ){
        var gold = chance.rpg('1d10', {sum: true});
        io.emit('server_says', 'You disarm the trap, and find '+gold+' gold.');
      } else  if( saveThrow > difficulty ){
        io.emit('server_says', 'You needed to beat a '+difficulty+'. You disarm the trap');
      } else {
        var damage = chance.d6();
        io.emit('server_says', 'You needed to beat a '+difficulty+'. You take '+damage+' points of damage');
      }
    });



  });
};
