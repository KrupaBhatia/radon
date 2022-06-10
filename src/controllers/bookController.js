

const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
// const BookModel= require("../models/bookModel")

const createBook1= async function (req, res) {
    let data= req.body
    console.log(data)
    // if (!data.author) res.send("Please enter the author Id");
    // let author=await authorModel.findById(data.author)
    // if(!author) res.send("Entered author Id is not valid");
    // if (!data.publisher) res.send("Please enter the publisher Id");
    // let publisher=await authorModel.findById(data.publisher)
    // if(!publisher) res.send("Entered publisher Id is not valid");
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const authorId=async function(req, res){
    let specificBook = await bookModel.find()
    .populate('author_id')
    .populate('publisher_id');
    res.send({msg:specificBook})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const updateBookCover=async function(req,res){
        let data=await publisherModel.find({name: {$in: ["Penguin","HarperCollins"]}}).select({_id:1})
        let publisherId = data.map((x) => x._id);
        let book = await bookModel.find({publisher: {$in: publisherId}}).update({$set: {isHardCover : true}});

        let specificBook=await bookModel.find({isHardCover:true})
        .populate("author_id")
        .populate("publisher_id")
        res.send({data: book, specificBook})
}

const createPublisher= async function (req, res) {
    let publish= req.body

    let publisherCreated= await publisherModel.create(publish)
    res.send({msg: publisherCreated})
}



module.exports.authorId=authorId
module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook1= createBook1

 module.exports.updateBookCover=updateBookCover
