const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();



const secureRoute = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        const user = await User.findById( userId );
        

        if (!user) {
            res.clearCookie('jwt', { httpOnly: true, secure: true });
            return res.status(401).json({ message: 'Not authenticated' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('JWT verification or database query failed:', err);
        return res.status(401).json({ message: 'Not authenticated' });
    }
};

module.exports = secureRoute;
