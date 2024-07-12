const securePath = require('../middlewares/securePath');
const { postImage, deleteImage } = require('../controllers/imagesController');

const express = require('express');
const router = express.Router();



router.get('/api/images/post-image', securePath, postImage);
router.get('/api/images/delete-image', securePath, deleteImage);



module.exports = router;
