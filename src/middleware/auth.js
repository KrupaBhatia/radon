const jwt = require("jsonwebtoken");
const mid1= function ( req, res, next){

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error

  if (!token) 
  return res.send({ status: false, msg: "token " });

    console.log(token);
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
     res.send({ status: false, msg: "invalid" });
     next();
}
const authorise = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
  if(!token) token=req.headers["x-auth-token"];
  let decodedToken=jwt.verify(token,"functionup-radon");
  let userToBeModified=req.params.userId
  let userLoggedIn=decodedToken.userId
  if(userToBeModified != userLoggedIn) 
      return res.send({status:false,msg:'Logged in user is not allowed to mofidy requsted user data'})
  next()
}
module.exports.mid1=mid1
module.exports.authorise=authorise