const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('Registering...');

    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user without userId
        const newUser = new User({
            username,
            email,
            password: hashedPassword
            // userId is not included
        });

        await newUser.save();

        // Create a JWT token
        const token = jwt.sign(
            { userId: newUser._id.toString(), username: newUser.username }, // Ensure userId is a string
            process.env.JWT_SECRET, // Use the environment variable for JWT secret
            { expiresIn: '1h' }
        );

        // Set the JWT token as a cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'Lax', // or 'None' if you need cross-site cookies
        });

        // Send a success response
        res.status(201).json({ message: 'User registered and logged in' });
    } catch (error) {
        console.error('Error registering user:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error registering user: ' + error.message });
    }
});

module.exports = router;
