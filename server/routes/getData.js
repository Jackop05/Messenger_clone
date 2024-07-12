const securePath = require('../middlewares/securePath');
const { getUserData, getConversationData, getGroupData, getSuggestedUsers } = require('../controllers/getDataController');

const express = require('express');
const router = express.Router();



router.post('/api/get-data/getUserData', securePath, getUserData);
router.post('/api/get-data/getConversationData', securePath, getConversationData);
router.post('/api/get-data/getGroupData', securePath, getGroupData);
router.post('/api/get-data/suggested-users', securePath, getSuggestedUsers);



module.exports = router;
