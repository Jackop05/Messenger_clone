const express = require('express');
const router = express.Router();



router.post('/logout', (req, res) => {
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true });

    res.redirect('/login');
});

module.exports = router;