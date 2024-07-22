const securePath = require('../middlewares/securePath');
const postMessages = require('../controllers/messagesController/postMessage');

const express = require('express');
const router = express.Router();



router.post('/post-messages/:otherUsername', securePath, postMessages);



module.exports = router;
