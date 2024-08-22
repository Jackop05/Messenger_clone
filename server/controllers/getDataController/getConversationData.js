const express = require('express');
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); 

const router = express.Router();



const getConversationsData = async (req, res) => {
    const { username, type, groupId } = req.query; 
    const usernames = username ? username.split(',') : [];

    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const me = decoded.username;


        const conversationsArray = [];
        if(type === 'conversation'){
            for (const username of usernames) {
                const conversations = await Conversation.find({
                    users: { $all: [username, me] } 
                });
                conversationsArray.push(...conversations); 
            }

        } else if (type === 'all'){
            const groupConversations = await Conversation.find({
                groupName: { $ne: '' },
                users: me
            });
            conversationsArray.push(...groupConversations)

        } else if (type === 'group'){
            const groupConversations = await Conversation.find({
                _id: { $all: groupId },
                users: me
            });
            conversationsArray.push(...groupConversations)
        }

        res.status(200).json(conversationsArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = getConversationsData;