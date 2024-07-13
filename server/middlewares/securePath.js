const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User'); 

dotenv.config();



const secureRoute = async (req, res, next) => {
    const token = req.cookies.jwt; 
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const userId = decoded.userId;

        const user = await User.findOne({ userId: userId });

        if (!user) {
            res.clearCookie('jwt', { httpOnly: true, secure: true });
            return res.redirect('/login');
        }

        req.user = user; 
        next();
    } catch (err) {
        console.error('JWT verification or database query failed:', err);
        res.redirect('/login');
    }
};



module.exports = secureRoute;
