let model = require('../models');

module.exports = {
    putComment: (req, res) => {
        let { postId, userId, commentContent } = req.body;
        console.log({ postId, userId, commentContent })
        model.Comment.create({ postId, userId, commentContent }, (err, result) => {
            res.json({ status: "success", data: result })
        })
    },
    deleteComment: (req, res) => {
        let { userId, postId } = req.body;
        model.Comment.findByIdAndRemove({ userId, _id: commentId }, (err, result) => {
            res.json({ status: "success" })
        })
    },
    viewComments: (req, res) => {
        let { postId } = req.body;
        let ids=[];
        let commentsWithUsersInfo=[];
        model.Comment.find({postId}).then(Comments => {
            for (let i = 0; i < Comments.length; i++) {ids.push(Comments[i].userId);}
            model.User.find({_id:{$in:ids}}).select('image username').then(users => {
                for (let i = 0; i < Comments.length; i++) {
                    for (let j = 0; j < users.length; j++) {
                        if (Comments.userId===users._id) {
                            commentsWithUsersInfo.push({
                                image:users[j].image,
                                username:users[j].username,
                                comment:Comments[i]
                            })
                            break;
                        }
                    }
                }
                res.json({data:commentsWithUsersInfo})
            })
        });
    }
};