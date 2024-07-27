const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
const User = require('../../models/User');
require('dotenv').config();

const createGroupConversation = async (req, res) => {
    const { groupName  } = req.body;
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.username;
    const users = [ username ];
    const nickNames = [ username ];


    if (users.length !== nickNames.length) {
        return res.status(400).json({ message: 'The number of nicknames must match the number of users.' });
    }

    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new conversation document
        const newConversation = new Conversation({
            users,
            nickName: nickNames,
            groupName: groupName
        });

        user.groups.push(newConversation._id);

        // Save the new conversation to the database
        await user.save();
        await newConversation.save();

        res.status(201).json({ message: 'Group conversation created successfully', conversation: newConversation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating group conversation: ' + error.message });
    }
};

module.exports = createGroupConversation;
