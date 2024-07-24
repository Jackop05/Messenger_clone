const securePath = require('../middlewares/securePath');
const updateConversation = require('../controllers/conversationsController/updateConversation');
const createGroup = require('../controllers/conversationsController/createGroup');

const express = require('express');
const router = express.Router();



router.post('/create-conversation', securePath, createGroup);
router.post('/update-conversation', securePath, updateConversation);



module.exports = router;
