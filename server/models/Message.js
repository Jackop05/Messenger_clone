const mongoose = require('mongoose');



const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String
    },
});



module.exports = messageSchema; 