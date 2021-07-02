const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/posts', ctrl.posts.getAllPosts);
router.get('/postId', ctrl.posts.getPostById);

module.exports = router;