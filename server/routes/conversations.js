const securePath = require('../middlewares/securePath');
const createConversation = require('../controllers/conversationsController/createConversation');
const updateConversation = require('../controllers/conversationsController/updateConversation');

const express = require('express');
const router = express.Router();



router.get('/create-conversation/', securePath, createConversation);
router.get('/post-conversation/', securePath, updateConversation);



module.exports = router;
