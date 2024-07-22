const securePath = require('../middlewares/securePath');
const getUserData = require('../controllers/getDataController/getUserData');
const getConversationData = require('../controllers/getDataController/getConversationData');
const getGroupData = require('../controllers/getDataController/getGroupData');
const getSuggestedUsers = require('../controllers/getDataController/getSuggestedUsers');
const getNewFriends = require('../controllers/getDataController/getNewFriends');

const express = require('express');
const router = express.Router();


router.get('/get-user-data', securePath, getUserData);
router.get('/get-new-friends/:description', getNewFriends);
router.get('/get-conversation-data/:conversationId', securePath, getConversationData);
router.get('/getGroupData', securePath, getGroupData);
router.get('/suggested-users', securePath, getSuggestedUsers);



module.exports = router;
