const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try{
    let data = abcd.body;
  if (Object.keys(data).length !=0){
    let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.status(201).send({ msg: savedData });
}
  else xyz.status(400).send({msg:"Invalid Data"})
  }
  catch (error){
    console.log("This is an error:",error.message)
    xyz.send(500).send({msg:"Server Error", error:error.message})
  }}


  const loginUser = async function (req, res) {
    
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({ msg: "username or the password is not corerct"});
    
    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
  };
  


const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  
  try{
    let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    // return res.status(404).send({msg:"No such user"})
    res.send({ status: false, msg: "No such user exists" });
  }
  catch(error){
  // res.send({ status: true, data: userDetails });
  res.status(500).send({msg:"error"})
}
}


const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userData = req.body
  
  let updateUser= await userModel.findOneAndUpdate({_id: userId},userData);
    res.send({data:updateUser})
  //Return an error if no user with the given id exists in the db
  
    if (!updateUser) {
    //  res.send("No such user exists");
    return res.status(404).send({msg:"No such user"})
  }
}
catch(error){
    res.status(500).send({msg:"Done"})
  }
}


const deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userData = req.body
    let deleteUser= await userModel.findOneAndDelete({_id: userId},userData);
      res.send({data:deleteUser})
    //Return an error if no user with the given id exists in the db
    
      if (!deleteUser) {
       res.status(200).send({msg:"No such user exists"});
    }
  }
  catch(error){
      res.status(500).send({msg:"Done"})
    }
  }
  
  const postMessage = async function (req, res) {
    try{
      
      let userToBeModified = req.params.userId
      let userLoggedIn = decodedToken.userId
  
      if(userToBeModified != userLoggedIn) 
      return 
      res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  
      let user = await userModel.findById(req.params.userId)
      if(!user) 
      return res.send({status: false, msg: 'No such user exists'})
      
      let updatedPosts = user.posts
      //add the message to user's posts
      updatedPosts.push(message)
      let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  
      //return the updated user document
      return res.send({status: true, data: updatedUser})
    }
    catch(err)
    {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
    }
  
  }
module.exports.createUser = createUser;
module.exports.loginUser=loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage=postMessage;
