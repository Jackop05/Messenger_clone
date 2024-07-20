const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

router.put('/updateUser/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { username, email, firstName, profileImage } = req.body;

    try {
        // Find the user by ID and update their fields
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username, email, firstName, profileImage },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user: ' + error.message });
    }
});

module.exports = router;
