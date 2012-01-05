var fb = require('./lib/facebook');


var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var _serverPort = 1337;

console.log('numCPUs: ' + numCPUs);

if (cluster.isMaster) {    
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
  
} else {
    
  // Worker processes have a http server.
  http.Server(function(req, res) {
      console.log('%s - %s', req.method, req.url);
      
      var _is_fb = check(req.url);
      
      res.writeHead(200);
      res.end("hello world node! .... " + _is_fb + "\n");
  }).listen(_serverPort);
  
}



function check(req_url) {
    var re = new RegExp(/^fb/);
    var m = re.exec(req_url);
    var _return = false;
    if (m != null) {
        _return = true;
    }
    return _return;
}