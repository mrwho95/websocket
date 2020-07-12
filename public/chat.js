//Make connection
var socket = io.connect('http://localhost:4000');

//Query DOM
//get input message on front end
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emit events
btn.addEventListener('click', function(){
	//first parameter is name of the message
	//second parameter is data of the message need to send to server
	socket.emit('chat', {
		//object
		message: message.value,
		handle: handle.value
	});
});

//listen for send events from server
socket.on('chat', function(data){
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})