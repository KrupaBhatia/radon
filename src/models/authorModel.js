// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// // String, Number
// // Boolean, Object/json, array


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: {
//         type:String,
//         required:true},
//     price:{
//         Indian:String,
//         Euro:String
//     },
//     authorName: String,
//     totalPage: Number,
//     year: {type : Number , default: 2021},
//     // tags:["books","novels"],
//     stockAvail:Boolean
    
    
// }, { timestamps: true });

// module.exports = mongoose.model('Book', bookSchema)

const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema( {
   
   author_name:String,
   age:Number,
   address:String,
   rating:Number
}, { timestamps: true });

module.exports = mongoose.model('author', authorSchema)