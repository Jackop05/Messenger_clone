const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    friendsIdList: [{
        type: String
    }],
    conversations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    }],
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }]
});



module.exports = mongoose.model('User', userSchema);
