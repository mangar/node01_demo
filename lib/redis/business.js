var business = new Object();

business.request = null;


business.execute = function() {
    
    var action = this.getAction();
    console.log("Executing action %s", action);
    
    var result = require('./redis').execute(action);
    
    console.log("Result: %s", result);
    
    return result
}

business.getAction = function() {
    var data = require('url').parse(this.request.url);
    var action = data.pathname.replace(/\//g, "");
    return action;
}




module.exports = business;