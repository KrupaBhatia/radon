const AuthorModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publish = req.body

    let publisherCreated= await publisherModel.create(publish)
    res.send({msg: publisherCreated})
}
module.exports.createPublisher= createPublisher