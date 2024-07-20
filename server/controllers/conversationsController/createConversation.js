const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
const User = require('../../models/User'); 

router.post('/createConversation', async (req, res) => {
    const { userId1, userId2, nickName, themeColor, quickEmoji } = req.body;

    // Validate input
    if (!userId1 || !userId2) {
        return res.status(400).json({ message: 'userId1 and userId2 are required' });
    }

    try {
        // Create a new conversation
        const newConversation = new Conversation({
            userId: userId1, // Assuming userId1 is the creator
            nickName: nickName || '',
            themeColor: themeColor || 'black',
            quickEmoji: quickEmoji || '😁',
            messages: []
        });
        await newConversation.save();

        // Update user1's conversations
        await User.findByIdAndUpdate(userId1, {
            $addToSet: { conversations: newConversation._id }
        });

        // Update user2's conversations
        await User.findByIdAndUpdate(userId2, {
            $addToSet: { conversations: newConversation._id }
        });

        res.status(201).json({ message: 'Conversation created successfully', conversation: newConversation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating conversation: ' + error.message });
    }
});

module.exports = router;
