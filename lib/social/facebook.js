
var myFacebook = new Object();

myFacebook._count = 0;

myFacebook.countUp = function(){
    this._count++;
    return "MyFacebook.CounUp! .... " + this_count;
}

module.exports = myFacebook;