var fb = require('./social/facebook');

var main = new Object();

main.getTypeOfCall = function(url) {
    var _typeOfCallReturn = "none";
    
    if (isFB(url)) {
        _typeOfCallReturn = "fb";
    }
    
    return _typeOfCallReturn;
}

main.getBusiness = function(url) {
    
    var _moduleReturn = null;
    
    var typeOfCall = this.getTypeOfCall(url)
    if (typeOfCall != "none") {
        console.log("TypeOfCall: %s", typeOfCall);
    }
    
    if (typeOfCall == "fb") {
        _moduleReturn = fb;
    }
    
    
    return _moduleReturn;
}


function isFB(url) {
    var re = /\/fb\/(.*)/g;
    var _return = re.test(url);
    return _return;    
}



module.exports = main;