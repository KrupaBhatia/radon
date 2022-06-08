const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook = async function (req, res) {
    let data= req.body
    console.log(data)

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function(req,res) {
    
    let allBooks = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    let yearList= await BookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)
}

const getParticularBooks = async function (req, res) {
    
    let getParticularBooks = await BookModel.find(req.body)
    res.send({msg:getParticularBooks})
}

const getXINRBooks= async function(req,res){
    let list = await BookModel.find({"prices.Indian": {$in: ["Rs 200"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })
}

const getRandomBooks= async function(req, res) {
    let allBooks = await BookModel.find({$or:[ {stockAvail: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}



module.exports.createBook=createBook;
module.exports.bookList=bookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getParticularBooks=getParticularBooks;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;