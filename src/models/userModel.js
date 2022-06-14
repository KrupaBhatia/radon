const mongoose = require('mongoose');


const userSchema = new mongoose.Schema( {
    name: String,
    address: String,
    balance: Number,
    gender: {
        type: String,
        enum: ["male", "female", "others"] 
    },
    age: Number,
    isFreeAppUser:{
        type : Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

