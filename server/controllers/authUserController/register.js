const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables

const router = express.Router();



router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id.toString(), username: newUser.username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Lax', 
        });

        res.status(201).json({ message: 'User registered and logged in' });
    } catch (error) {
        console.error('Error registering user:', error); 
        res.status(500).json({ message: 'Error registering user: ' + error.message });
    }
});

module.exports = router;