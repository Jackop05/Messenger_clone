const securePath = require('../middlewares/securePath');
const { createConversation, postConversation } = require('../controllers/conversationController');

const express = require('express');
const router = express.Router();



router.get('/create-conversation/', securePath, createConversation);
router.get('/post-conversation/', securePath, postConversation);



module.exports = router;
