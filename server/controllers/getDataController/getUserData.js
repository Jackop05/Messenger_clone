const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); // Adjust the path as necessary
require('dotenv').config(); // Ensure environment variables are loaded



const getUserData = async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
        // Verify the token and extract userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        // Find user by userId
        const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ userData });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Error fetching user data: ' + error.message });
    }
};

module.exports = getUserData;
