const { count } = require("console")
const ordersModel= require("../models/ordersModel")
const userModel = require("../models/userModel")
const productModel=require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    // let price = data.price
    // if(!price) return res.send({msg: 'Price is mandatory in the request'})
    // let  user_Id = order.user_Id;
    let savedData= await ordersModel.create(data)
    res.send({data: savedData})
}

// const validation = async function (req, res){
//     let userId=ordersModel.user_Id
//     let checkUser = await ordersModel.findById(userId)
//     if (!checkUser){
//         res.send({msg: "User not found"})
//     }
    
// }

// const Provalidation = async function (req, res){
//     let productId= ordersModel.product_Id
//     let checkProduct = await productModel.findById(productId)
//     if (!checkProduct){
//         res.send({msg: "Product not found"})
//     }
    
// }
module.exports.createOrder= createOrder
// module.exports.validation=validation
// module.exports.Provalidation=Provalidation


