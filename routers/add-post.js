const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts');

router.get('/add-post',postController.getAddpost);

router.post('/add-post',postController.postAddPost);


module.exports = router;