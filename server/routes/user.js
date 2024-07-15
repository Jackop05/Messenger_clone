const securePath = require('../middlewares/securePath');
const { updateUser } = require('../controllers/userController');

const express = require('express');
const router = express.Router();



router.post('/update-user', securePath, updateUser);



module.exports = router;
