const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
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
        type: String
    }],
    groups: [{
        type: String
    }]
});



module.exports = mongoose.model('User', userSchema);
