var main = require('./lib/main');

var underscore = require('underscore');
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
  var server = http.Server(function(req, res) {
      // console.log('%s - %s', req.method, req.url);
      
      var business = main.getBusiness(req.url);      
      if (business) {
          console.log(business.countUp());
      }
      
      res.writeHead(200);
      res.end("hello world node! .... " + business + "\n");
  }).listen(_serverPort);
  
}
