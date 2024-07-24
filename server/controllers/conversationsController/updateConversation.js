const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
require('dotenv').config();

const updateConversation = async (req, res) => {
    
    const { nickName, themeColor, quickEmoji, username, otherUsername } = req.body;

    try {
        // Find the conversation by ID and update its fields
        const conversation = await Conversation.findOne(
            {users: { $all: [username, otherUsername] }}
        )

        const nickNameArray = (conversation.users[0] === username) ? [conversation.nickName[0], nickName] : [nickName, conversation.nickName[1]];
        const updatedConversation = await Conversation.findOneAndUpdate(
            {users: { $all: [username, otherUsername] }},
            { nickName: nickNameArray, themeColor, quickEmoji },
            { new: true }
        );
        

        if (!updatedConversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }

        await updatedConversation.save();

        res.status(200).json({ message: 'Conversation updated successfully', conversation: updatedConversation });
    } catch (error) {
        res.status(500).json({ message: 'Error updating conversation: ' + error.message });
    }
};

module.exports = updateConversation;
