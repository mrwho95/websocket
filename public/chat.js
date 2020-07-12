//Make connection
var socket = io.connect('http://localhost:4000');

//Query DOM
//get input message on front end
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

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

//send to server who is key in input
message.addEventListener('keypress', function(){
	socket.emit('typing', handle.value);
})

//listen for send events from server
socket.on('chat', function(data){
	feedback.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})

//listen for who is typing on other client font end page
socket.on('typing', function(data){
	feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});