var http = require('http');
var serverIP = "127.0.0.1";
var serverPort = 1337;


http.createServer(function (req, res) {
    
    // console.log(require('url').parse(req.url));        
    
    var redis = require('./lib/redis/redis');
    redis.request = req;
    var content = redis.execute();
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(content) + '\n');  
  
}).listen(serverPort, serverIP);

console.log('Server running at http://' + serverIP + ':1337/');
