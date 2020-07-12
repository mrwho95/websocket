var express = require('express');

//App setup
var app = express();
var server = app.listen(4000, function(){
	console.log("listening to requests on port 4000");
});

//static files
//go to index.html auto 
app.use(express.static('public'));