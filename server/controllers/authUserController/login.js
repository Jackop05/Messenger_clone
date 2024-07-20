const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User'); 

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if username exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare provided password with stored (hashed) password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user.userId, username: user.username },
            'your_jwt_secret', // Replace with your actual JWT secret
            { expiresIn: '1h' }
        );

        // Set the JWT token as a cookie
        res.cookie('jwt', token, { httpOnly: true });

        // Send a success response
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in: ' + error.message });
    }
});

module.exports = router;