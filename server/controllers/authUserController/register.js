const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); 

const router = express.Router();

router.post('/register', async (req, res) => {
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

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();

        // Create a JWT token
        const token = jwt.sign(
            { userId: newUser.userId, username: newUser.username },
            'your_jwt_secret', // Replace with your actual JWT secret
            { expiresIn: '1h' }
        );

        // Set the JWT token as a cookie
        res.cookie('jwt', token, { httpOnly: true });

        // Send a success response
        res.status(201).json({ message: 'User registered and logged in' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user: ' + error.message });
    }
});

module.exports = router;
