const mongoose = require('mongoose');
const Conversation = require('../../models/Conversation'); // Adjust the path if necessary
const User = require('../../models/User'); // Adjust the path if necessary
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function postMessage(req, res) {
    const { otherUsername, groupId } = req.params; // The username of the other participant
    const { text } = req.body;
    const token = req.cookies.jwt;

    try {
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const username = decoded.username;

        // Find both users by their usernames
        const currentUser = await User.findOne({ username });
        const otherUser = otherUsername ? await User.findOne({ username: otherUsername }) : null;

        if ((!currentUser || !otherUser) && otherUsername) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if a conversation already exists between the two users
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
            // Create a new conversation if it doesn't exist
            conversation = new Conversation({
                users: [currentUser.username, otherUser.username],
                messages: []
            });
            
            // Save the new conversation
            await conversation.save();

            // Add the conversation ID to both users' conversations arrays
            currentUser.conversations.push(conversation._id);
            otherUser.conversations.push(conversation._id);

            // Add each user to the other's friendsIdList if they aren't already friends
            if (!currentUser.friendsIdList.includes(otherUser.username)) {
                currentUser.friendsIdList.push(otherUser.username);
            }
            if (!otherUser.friendsIdList.includes(currentUser.username)) {
                otherUser.friendsIdList.push(currentUser.username);
            }

            await currentUser.save();
            await otherUser.save();
        }

        // Create a new message
        const newMessage = {
            user: currentUser.username,
            text,
            date: new Date(),
            status: 'Sent',
        };

        // Add the new message to the conversation's messages array
        conversation.messages.push(newMessage);

        // Save the conversation with the new message
        await conversation.save();

        res.status(200).json({ message: 'Message sent successfully', newMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}


module.exports = postMessage;
