const securePath = require('../middlewares/securePath');
const { login, register, logout } = require('../controllers/authUserController');

const express = require('express');
const router = express.Router();



router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.post('/api/auth/logout', securePath, logout);



module.exports = router;
