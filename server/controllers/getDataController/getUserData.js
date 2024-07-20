const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Adjust the path as necessary


const getUserData = async (req, res) => {
    const { userId } = req.body;

    try {
        // Find user by userId
        const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ userData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data: ' + error.message });
    }
};

module.exports = router;
