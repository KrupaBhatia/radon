// const UserModel= require("../models/userModel")
const { count } = require("console")
const userModel= require("../models/userModel")
const productModel = require("../models/productModel")
const ordersModel = require("../models/ordersModel")

// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

// const createUser= async function (req, res) {
    
//     let data= req.body
//     let tokenDataInHeaders= req.headers.token
//     //Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"
    
    
//     console.log("Request headers after modificatiom",req.headers)
    
//     //Set a header in response
//     res.header('year','2022')
//     res.send({msg: "Hi"})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
const createUser= async function (req, res) {
    let data = req.body
   
    //Set a header in request
    let Data= await userModel.create(data)
    res.send({data: Data})
}
const validateuid = async function(req,res) {
    let id = req.body.user_Id
    let pid = req.body.product_Id
    
    let savedData = await userModel.findOne({_id:id})
    if(!savedData){
        res.send({msg:"User ID not found"})
        return;
    }
    let savedData2 = await productModel.findOne({_id:pid})
    if(!savedData2){
        res.send({msg:"product ID not found"})
        return;
    }
    else{
        let savedData = await ordersModel.create(req.body)
        res.send({msg:savedData})
    }
}








module.exports.validateuid=validateuid



module.exports.createUser= createUser
// module.exports.validation=validation
// module.exports.basicCode= basicCode