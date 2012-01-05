var http = require('http');
var serverIP = "127.0.0.1";


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  
}).listen(1337, serverIP);

console.log('Server running at http://' + serverIP + ':1337/');
