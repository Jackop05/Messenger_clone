const securePath = require('../middlewares/securePath');
const { getUserData, getConversationData, getGroupData, getSuggestedUsers } = require('../controllers/getDataController');

const express = require('express');
const router = express.Router();



router.post('/getUserData', securePath, getUserData);
router.post('/getConversationData', securePath, getConversationData);
router.post('/getGroupData', securePath, getGroupData);
router.post('/suggested-users', securePath, getSuggestedUsers);



module.exports = router;
