const securePath = require('../middlewares/securePath');
const { createConversation, postConversation ,updateConversation } = require('../controllers/conversationController');

const express = require('express');
const router = express.Router();



router.get('/create-conversation/', securePath, createConversation);
router.get('/update-conversation', securePath, updateConversation);



module.exports = router;
