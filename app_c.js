var fb = require('./lib/facebook');

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
      
      console.log('%s - %s', req.method, req.url);
      
      var _is_fb = isFB(req.url);
      if (_is_fb) {
          
          var ret = fb.countUp();
          console.log("Return: %s", ret);
          
          // fb.countUp();
          
          // myFB = fb.MyFB();
          
          // myfb = fb.MyFacebook();
          
          // facebook.test();
          
      }
      
      res.writeHead(200);
      res.end("hello world node! .... " + _is_fb + "\n");
  }).listen(_serverPort);
  
  // cluster.start().listen(_serverPort);
  // cluster().set('server', server).listen(_serverPort);
  // server.listen(_serverPort);
  
  // cluster(server).listen(_serverPort);
      // .use(cluster.reload())
      
      

  
}



function isFB(req_url) {
    var re = /fb/g;
    var _return = re.test(req_url);
    return _return;
}