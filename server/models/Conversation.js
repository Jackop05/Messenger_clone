const mongoose = require('mongoose');
const messageSchema = require('./Message');



const conversationSchema = new mongoose.Schema({
    users: [{
        type: String,
        required: true
    }],
    nickName: {
        type: String,
        default: ''
    },
    themeColor: {
        type: String,
        default: 'black'
    },
    quickEmoji: {
        type: String,
        default: '😁'
    },
    messages: [messageSchema]
});



module.exports = mongoose.model('Conversation', conversationSchema);
