const mongoose = require('mongoose')

const publishSchema = new mongoose.Schema( {
   name:String,
   headQuater:String,
}, { timestamps: true });

module.exports = mongoose.model('publisher', publishSchema)