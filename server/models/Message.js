const mongoose = require('mongoose');



const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    text: {
        type: String
    },
    status: {
        type: String,
        enum: ['successful', 'failed']
    },
    isImage: {
        type: Boolean,
        required: true
    },
    imageUrl: {
        type: String,
        default: null
    }
});



module.exports = mongoose.model('Message', messageSchema);
