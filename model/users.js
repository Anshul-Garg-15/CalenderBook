const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    fName: {
        type: String,
        required: true,
    },
    surName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email : {
        type:String,
        required: true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    
    timestamps:true
});

const User = mongoose.model('User' , userSchema);

module.exports = User;

