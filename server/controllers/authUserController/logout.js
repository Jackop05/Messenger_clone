const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
    // Destroy the JWT cookie by setting its expiration date to the past
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true });

    // Redirect to the login page
    res.redirect('/login');
});

module.exports = router;