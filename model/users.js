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
     //user will have event id also
     report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
},{   
    timestamps:true
});

const User = mongoose.model('User' , userSchema);

module.exports = User;

