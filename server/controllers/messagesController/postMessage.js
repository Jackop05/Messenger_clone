const express = require('express');
const router = express.Router();
const Message = require('../../models/Message'); // Adjust the path as necessary
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
const User = require('../../models/User'); // Adjust the path as necessary

router.post('/postMessage', async (req, res) => {
    const { userId, conversationId, text } = req.body;

    try {
        // Create a new message
        const newMessage = new Message({
            userId,
            text
        });
        const savedMessage = await newMessage.save();

        // Update conversation to include the new message
        const updatedConversation = await Conversation.findByIdAndUpdate(
            conversationId,
            { $push: { messages: savedMessage._id } },
            { new: true }
        );

        if (!updatedConversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }

        // Update user's conversations
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { conversations: conversationId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(201).json({ message: 'Message posted successfully', message: savedMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error posting message: ' + error.message });
    }
});

module.exports = router;
