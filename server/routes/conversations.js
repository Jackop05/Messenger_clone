const securePath = require('../middlewares/securePath');
const updateConversation = require('../controllers/conversationsController/updateConversation');
const createGroup = require('../controllers/conversationsController/createGroup');
const addUser = require('../controllers/conversationsController/addUser');

const express = require('express');
const router = express.Router();



router.post('/create-conversation', securePath, createGroup);
router.post('/update-conversation', securePath, updateConversation);
router.post('/add-user', securePath, addUser);

module.exports = router;
