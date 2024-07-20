const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary

router.put('/updateConversation/:conversationId', async (req, res) => {
    const conversationId = req.params.conversationId;
    const { nickName, themeColor, quickEmoji } = req.body;

    try {
        // Find the conversation by ID and update its fields
        const updatedConversation = await Conversation.findByIdAndUpdate(
            conversationId,
            { nickName, themeColor, quickEmoji },
            { new: true }
        );

        if (!updatedConversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }

        res.status(200).json({ message: 'Conversation updated successfully', conversation: updatedConversation });
    } catch (error) {
        res.status(500).json({ message: 'Error updating conversation: ' + error.message });
    }
});

module.exports = router;
