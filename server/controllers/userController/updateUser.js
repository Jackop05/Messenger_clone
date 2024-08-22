const express = require('express');
const router = express.Router();
const User = require('../models/User'); 



router.put('/updateUser/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { username, email, firstName, profileImage } = req.body;

    try {
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