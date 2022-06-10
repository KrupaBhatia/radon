const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
   name :String,
   author_id:{
       type:ObjectId,
       ref:"author"
   },
   publisher_id:{
       type:ObjectId,
       ref:"publisher"
   },
   price:Number,
   rating:Number,
    isHardCover:{type:Boolean, default:false}
},{ timestamps: true });


module.exports = mongoose.model('book1', bookSchema)