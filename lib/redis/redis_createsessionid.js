var redis_csi = new Object();

redis_csi.request = null;

redis_csi.execute = function() {
    console.log("Starting execution of Redis_Create_Session_ID ....");
    var content = {"status": "ok"};
    
    var key = randomString(10) + randomStringDate() + randomString(10);
    content.sessionID = key;
    
    
    console.log(".... Redis_Create_Session_ID just finished!");
    return content;
}






function randomStringDate() {
    return '' + new Date().getTime();
}

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*-_=+;:,.'.split('');
    
    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}





module.exports = redis_csi;



