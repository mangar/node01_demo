var myRedis = new Object();

this.request = null;

myRedis.execute = function() {
    
    var action = this.getAction();
    console.log("Executing action %s", action);
    
    var redisAction = require('./redis_' + action.toLowerCase());
    redisAction.request = this.request;
    
    var returnContent = redisAction.execute();
    console.log("Returning Content: %s", returnContent);
    
    return returnContent;
}


myRedis.getAction = function() {
    var data = require('url').parse(this.request.url);
    var action = data.pathname.replace(/\//g, "");
 
    return action;
}



module.exports = myRedis;



