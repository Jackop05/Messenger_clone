const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary



// Route to get conversation data
const getConversationData = async (req, res) => {
    const { conversationId } = req.body;

    try {
        // Find conversation by conversationId
        const conversationData = await Conversation.findById(conversationId);
        if (!conversationData) {
            return res.status(404).json({ message: 'Conversation not found' });
        }

        res.status(200).json({ conversationData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching conversation data: ' + error.message });
    }
};

module.exports = router;
