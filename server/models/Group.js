const mongoose = require('mongoose');
const messageSchema = require('./Message');



const groupSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true,
        unique: true
    },
    users: [{
        userId: {
            type: String
        },
        userNickName: {
            type: String,
            default: ''
        }
    }],
    messages: [messageSchema],
    groupImageUrl: {
        type: String,
        default: 'public/images/defaultProfileImage',
        required: true
    }
});



module.exports = mongoose.model('Group', groupSchema);
