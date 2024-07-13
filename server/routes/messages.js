const securePath = require('../middlewares/securePath');
const { postMessages } = require('../controllers/messagesController');

const express = require('express');
const router = express.Router();



router.get('/add-new-friend/', securePath, newFriend);
router.get('/post-messages/', securePath, postMessages);



module.exports = router;
