const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.posts.getAllPosts);
router.get('/:postId', ctrl.posts.getPostById);

router.post('/create', ctrl.posts.createPost);

router.put('/:index', ctrl.posts.editPost);

router.delete('/:index', ctrl.posts.deletePost);

module.exports = router;