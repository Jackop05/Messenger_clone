const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path if necessary

const router = express.Router();

// Endpoint to fetch conversations by IDs
const getConversationsData = async (req, res) => {
    
    const { username } = req.query; // Array of conversation IDs
    console.log(username);

    try {
        if (username.length === 0) {
            return res.status(400).json({ error: 'Invalid or empty conversation IDs' });
        }

        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const me = decoded.username;

        // --------------------------------------------------------------------------------------------

        // Fetch conversations where the _id is in the provided conversationIds array
        const conversations = await Conversation.find({
            usernames: { $all: [username, me] }
        }).populate('messages') // Adjust based on how messages are stored
        .exec();

        //---------------------------------------------------------------------------------------------

        res.status(200).json(conversations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = getConversationsData;
