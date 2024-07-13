const securePath = require('../middlewares/securePath');
const { login, register, logout } = require('../controllers/authUserController');

const express = require('express');
const router = express.Router();



router.post('/login', login);
router.post('/register', register);
router.post('/logout', securePath, logout);



module.exports = router;
