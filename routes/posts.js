const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/posts', ctrl.posts.getAllPosts);
router.get('/postId', ctrl.posts.getPostById);

router.post('/create', ctrl.posts.createPost);

router.put('/posts/:index', ctrl.posts.editPost);

router.delete('/posts/:index', ctrl.posts.deletePost);

module.exports = router;