const mongoose = require('mongoose');

const calenderSchema = mongoose.Schema({
    
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventTime: {
        type: String,
        required: true
    },

    //event will have user id
    user: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'

    }
}, {
    timestamps:true
});

const Event = mongoose.model('Event' , calenderSchema);

module.exports = Event;

