const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Conversation = require('../../models/Conversation'); // Adjust the path as necessary
const User = require('../../models/User'); // Adjust the path as necessary
require('dotenv').config();

const addUserToGroupConversation = async (req, res) => {
  const { groupId, newUser } = req.body;
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the conversation by groupId
    const conversation = await Conversation.findById(groupId);
    if (!conversation) {
      return res.status(404).json({ error: 'Group conversation not found' });
    }

    // Find the user by username
    const user = await User.findOne({ username: newUser });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already in the group
    if (conversation.users.includes(user._id)) {
      return res.status(400).json({ error: 'User is already in the group' });
    }

    // Add the user to the group's users array
    conversation.users.push(user.username);
    await conversation.save();

    // Add the conversationId to the user's groups list
    user.groups.push(conversation._id);
    await user.save();

    res.status(200).json({ message: 'User added successfully', conversation });
  } catch (error) {
    res.status(500).json({ error: 'Error adding user to group conversation: ' + error.message });
  }
};

router.post('/add-user', addUserToGroupConversation);

module.exports = router;
