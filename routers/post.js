const express = require('express');
const router = express.Router();


const postController = require('../controllers/posts');

//GET METHOD
router.get('/post',postController.getPost);


// exporting router to use it in app.js
module.exports = router;