const Post = require('../models').Post;

const getAllPosts = (req, res) => {
    Post.findAll()
    .then(posts => {
        res.json(posts)
    })
}

const createPost = (req, res) => {
    Post.create(req.body)
    .then(newPost => {
        res.json(newPost)
    })
}

const getPostById = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        res.json(foundPost)
    })
}

const editPost = (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedPost => {
        res.json(updatedPost)
    })
}

const deletePost = (req, res) => {
    Post.destory({
        where: {
            id: req.params.index
        }
    })
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost
}