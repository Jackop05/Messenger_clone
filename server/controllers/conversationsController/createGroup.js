const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
require('dotenv').config();

const createGroupConversation = async (req, res) => {
    const { groupName  } = req.body;
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const users = [ decoded.username ];
    const nickNames = [ decoded.username ];


    if (users.length !== nickNames.length) {
        return res.status(400).json({ message: 'The number of nicknames must match the number of users.' });
    }

    try {
        // Create a new conversation document
        const newConversation = new Conversation({
            users,
            nickName: nickNames,
            groupName: groupName
        });

        // Save the new conversation to the database
        await newConversation.save();

        res.status(201).json({ message: 'Group conversation created successfully', conversation: newConversation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating group conversation: ' + error.message });
    }
};

module.exports = createGroupConversation;
