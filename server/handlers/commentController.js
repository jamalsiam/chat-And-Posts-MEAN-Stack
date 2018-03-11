let model = require('../models');

module.exports = {
    putComment: (req, res) => {
        let { postId, userId, commentContent } = req.body;
        console.log({ postId, userId, commentContent })
        model.Comment.create({ postId, userId, commentContent}, (err, result) => {
            res.json({ status: "success", data: result })
        })
    },
    deleteComment: (req, res) => {
        let { userId, postId } = req.body;
        model.Comment.findByIdAndRemove({ userId, _id: commentId }, (err, result) => {
            res.json({ status: "success" })
        })
    },
    getCommentPost: (req, res) => {
        let = { postId }
        model.Comment.find({ postId })
            .then((data) => {
                res.json({ status: "success", data })
            })
    }
};