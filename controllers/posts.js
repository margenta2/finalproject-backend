const Post = require('../models').Post;

const getAllPosts = (req, res) => {
    Post.findAll()
    .then(posts => {
        res.json(posts)
    })
}

const getPostById = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        res.json(foundPost)
    })
}

module.exports = {
    getAllPosts,
    getPostById
}