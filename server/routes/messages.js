const securePath = require('../middlewares/securePath');
const postMessages = require('../controllers/messagesController/postMessage');

const express = require('express');
const router = express.Router();



router.get('/post-messages/', securePath, postMessages);



module.exports = router;
