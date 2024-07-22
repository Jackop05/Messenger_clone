const mongoose = require('mongoose');
const Conversation = require('../../models/Conversation'); // Adjust the path if necessary
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function getConversationData(req, res) {
    const { conversationId } = req.params;
    const token = req.cookies.jwt;

    try {
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the conversation by ID and check if the user is part of it
        const conversation = await Conversation.findById(conversationId)
            .select('messages') // Only select the messages field
            .exec();

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        // Assuming you have a userId field in the conversation schema to check against
        if (!conversation.userId.includes(decoded.userId)) {
            return res.status(403).json({ error: 'Users not in conversation cannot interact with it' });
        }

        // Sort messages by date in descending order and take the last 200 messages
        const messages = conversation.messages.sort((a, b) => b.date - a.date).slice(0, 200);

        // Format the messages as required
        const formattedMessages = messages.map(msg => [msg.text, msg.userId]);

        res.status(200).json(formattedMessages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = getConversationData;
