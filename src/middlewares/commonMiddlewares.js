const router = require('../routes/route');


var requestIp = require('request-ip');
var ipMiddleware = function(req, res, next) {
    var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
    console.log(clientIp);
    
    next();
};


const timestamp= require('time-stamp')
const timeStamp = function(req,res,next) {
    console.log(timestamp("YYYY/MM/DD:mm:ss"))
    next()
}
const path = function(req,res,next) {
    console.log(req.route.path)
    res.send("Middleware Asiggnment")
}



module.exports.ipMiddleware= ipMiddleware
module.exports.timeStamp=timeStamp
module.exports.path= path
