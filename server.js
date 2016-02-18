var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Contet-Type' : 'text/plain'});
	res.end('Hello World');
});

server.listen(8000);
