const securePath = require('../middlewares/securePath');
const getUserData = require('../controllers/getDataController/getUserData');
const getConversationData = require('../controllers/getDataController/getConversationData');
const getGroupData = require('../controllers/getDataController/getGroupData');
const getSuggestedUsers = require('../controllers/getDataController/getSuggestedUsers');

const express = require('express');
const router = express.Router();



router.post('/getUserData', securePath, getUserData);
router.post('/getConversationData', securePath, getConversationData);
router.post('/getGroupData', securePath, getGroupData);
router.post('/suggested-users', securePath, getSuggestedUsers);



module.exports = router;
