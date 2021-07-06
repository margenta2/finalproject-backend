const User = require('../models').User;
const Post = require('../models').Post;

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)

    })
}

const getProfile = (req, res) => {
    User.findByPk(req.params.index)
    .then(userProfile => {
        Post.findAll()
        .then(allPosts => {
            res.json ({
                user: userProfile,
                post: allPosts
            })
        })
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.json(updatedUser)
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(deletedUser => {
        res.json(deletedUser)
    })
}

module.exports = {
    signup,
    login,
    getProfile,
    editProfile,
    deleteUser
}