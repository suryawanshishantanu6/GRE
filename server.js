var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static('/'));

http.listen(8080, function(){
	console.log('listening on *:8080');
});
