var express = require('express');
var app = express();
var clients =[];

var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at //' + host + ':' + port);
}

app.use(express.static('public'));

var io = require('socket.io').listen(server);

io.sockets.on('connection',  function (socket) {

    socket.on('mouse', function(data) {
        socket.broadcast.emit('mouse', data);    
      });
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
      });
  }
);