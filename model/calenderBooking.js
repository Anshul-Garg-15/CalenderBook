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
    user: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'

    },
    
    timestamps:true
});

const Event = mongoose.model('Event' , calenderSchema);

module.exports = Event;

