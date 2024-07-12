const securePath = require('../middlewares/securePath');
const { postMessages } = require('../controllers/messagesController');

const express = require('express');
const router = express.Router();



router.get('/api/messages/add-new-friend/', securePath, newFriend);
router.get('/api/messages/post-messages/', securePath, postMessages);



module.exports = router;
