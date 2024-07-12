const mongoose = require('mongoose');
const messageSchema = require('./Message');



const conversationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        default: '',
        trim: true
    },
    messages: [messageSchema]
});



module.exports = mongoose.model('Conversation', conversationSchema);
