const express = require('express');
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path if necessary

const router = express.Router();

const getConversationsData = async (req, res) => {
    const { username } = req.query; // Comma-separated list of usernames
    const usernames = username ? username.split(',') : []; // Split to get an array of usernames

    try {
        if (!usernames.length) {
            return res.status(400).json({ error: 'No usernames provided' });
        }

        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const me = decoded.username;

        // Fetch conversations where both `me` and a specific username are included
        const conversationsArray = [];

        // Fetch conversations where groupName is not empty and 'me' is included
        const groupConversations = await Conversation.find({
            groupName: { $ne: '' },
            users: me
        });

        

        conversationsArray.push(...groupConversations); // Add these conversations to the array

        res.status(200).json(conversationsArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = getConversationsData;
