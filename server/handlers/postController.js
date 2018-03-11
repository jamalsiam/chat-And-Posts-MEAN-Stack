let model = require('../models');

module.exports = {
    sharePost: (req, res) => {
        let { _id, postContent } = req.body;
        model.Post.create({ userId: _id, postContent }, (post) => {
            res.json({ status: "success" })
        })
    },
    deletePost: (req, res) => {
        let { userId, postId } = req.body;
        model.Post.findByIdAndRemove({ userId, _id: postId }, (err, result) => {
            res.json({ status: "success" })

        })
    },
    getProfilePost: (req, res) => {
        let { userId } = req.body;
        model.Post.find({ userId })
            .then((data) => {
                res.json({ status: "success", data })
            })
    },
    getOnePost: (req, res) => {
        let { postId } = req.body;
        model.Post.findOne({ _id: postId })
            .then((data) => {
                res.json({ status: "success", data })
            })
    },
    getFollowingPosts: (req, res) => {
        let { id } = req.body;
        let idUsers = []
        let arrOfFollowerId = [];

        model.Follow.find({ followingId: id }).then((ids) => {
            for (let i = 0; i < ids.length; i++) { idUsers.push(ids[i].followerId) }
            model.User.find({ _id: { $in: idUsers } })
                .select('username image')
                .then((userInfo) => {
                    model.Post.find({ userId: { $in: idUsers } })
                        .then((postInfo) => {
                            arrOfFollowerId.push({
                                userInfo,
                                postInfo
                            });
                            res.json({ data: arrOfFollowerId })
                        })
                })
        });





    },
    randomSuggest: (req, res) => {
        model.Post.count().exec(function (err, count) {

            // Get a random entry
            var random = Math.floor(Math.random() * count)

            // Again query all users but only fetch one offset by our random #
            model.Post.findOne().skip(random).exec(
                function (err, result) {
                    // Tada! random user
                    model.User.findOne({ _id: result.userId }).then((userInfo) => {
                        res.json({ post: result, user: userInfo })
                    })
                })
        })
    },
    deletePost: (req, res) => {
        let { postId, userId } = req.body;
        model.Post.remove({ _id: postId, userId: userId }, function (err) {
            if (err) return handleError(err);
            res.json({ data: "Deleted" })
        });
    },
    likeAndCommentLength: (req, res) => {
        let { postId, profileId } = req.body;
        model.Comment.find({ postId }).then(comments => {
            model.Like.find({ postId }).then(likes => {
                model.Like.findOne({ postId, userId: profileId }).then(userLiked => {
                    console.log(userLiked)
                    if (userLiked) {
                        res.json({ commentsLength: comments.length, likesLength: likes.length, checkUserLiked: true });
                    } else {
                        res.json({ commentsLength: comments.length, likesLength: likes.length, checkUserLiked: false });
                    }
                })
            })
        })
    }
};

