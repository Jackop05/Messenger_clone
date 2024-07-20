const securePath = require('../middlewares/securePath');
const login = require('../controllers/authUserController/login');
const register = require('../controllers/authUserController/register');
const logout = require('../controllers/authUserController/logout');

const express = require('express');
const router = express.Router();



router.post('/login', login);
router.post('/register', register);
router.post('/logout', securePath, logout);



module.exports = router;
