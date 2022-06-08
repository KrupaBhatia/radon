const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true},
    price:{
        Indian:String,
        Euro:String,
    },
    authorName: String,
    totalPage: Number,
    year:{type : Number , default: 2021},
    // tags:["books","novels"],
    stockAvail:Boolean
    
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)