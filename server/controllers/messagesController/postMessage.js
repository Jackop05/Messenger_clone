const mongoose = require('mongoose');
const Conversation = require('../../models/Conversation'); 
const User = require('../../models/User'); 
const jwt = require('jsonwebtoken');

require('dotenv').config();



async function postMessage(req, res) {
    const { otherUsername, groupId } = req.params; 
    const { text } = req.body;
    const token = req.cookies.jwt;

    try {
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        const currentUser = await User.findOne({ username });
        const otherUser = otherUsername ? await User.findOne({ username: otherUsername }) : null;
        if ((!currentUser || !otherUser) && otherUsername) {
            return res.status(404).json({ error: 'User not found' });
        }

        let conversation;
        if(otherUsername){
            conversation = await Conversation.findOne({
                users: { $all: [currentUser.username, otherUser.username] }
            });

        } else if(groupId){
            conversation = await Conversation.findOne({
                _id: groupId,
                users: currentUser.username
            });
        }

        if (!conversation) {
            conversation = new Conversation({
                users: [currentUser.username, otherUser.username],
                messages: []
            });
            await conversation.save();

            currentUser.conversations.push(conversation._id);
            otherUser.conversations.push(conversation._id);

            if (!currentUser.friendsIdList.includes(otherUser.username)) {
                currentUser.friendsIdList.push(otherUser.username);
            }
            if (!otherUser.friendsIdList.includes(currentUser.username)) {
                otherUser.friendsIdList.push(currentUser.username);
            }

            await currentUser.save();
            await otherUser.save();
        }

        const newMessage = {
            user: currentUser.username,
            text,
            date: new Date(),
            status: 'Sent',
        };
        conversation.messages.push(newMessage);
        await conversation.save();

        res.status(200).json({ message: 'Message sent successfully', newMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}


module.exports = postMessage;