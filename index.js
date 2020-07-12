var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, function(){
	console.log("listening to requests on port 4000");
});

//static files
//go to index.html auto 
app.use(express.static('public'));

//socket setup
//socket io works on this server
var io = socket(server);

io.on('connection', function(socket){
	//both server and client front end established the socket then it will appear result below
	console.log('made socket connection', socket.id);

	//listen message sent by client
	socket.on('chat', function(data){
		//send message data to all client
		io.sockets.emit('chat', data)
	});

	//listen who is typing
	socket.on('typing', function(data){
		//broadcast who is typing, other client can see who is typing
		socket.broadcast.emit('typing', data);
	});
});