let model = require('../models');
module.exports = {
    follow: (req, res) => {
        let { followerId, followingId } = req.body;
        if (followerId && followingId) {
            model.Follow.findOne({ followerId, followingId })
                .exec((err, result) => {
                    if (!result) {
                        model.Follow.create({ followerId, followingId })
                            .then((newFollow) => {
                                res.json({ status: "success", data: true, newFollow })
                            });
                    }
                    else {
                        model.Follow.remove({ followerId, followingId }, function (err) {
                            if (err) return handleError(err);
                            res.json({ status: "success", data: false })
                        });
                    }
                });
        }
    },
    checkIfFollow: (req, res) => {
        let { followerId, followingId } = req.body;
        model.Follow.findOne({ followerId, followingId }).then((ress) => {
            if (ress == null) {
                res.json({ data: "Follow" })
            }
            else {
                res.json({ data: "Unfollow" })
            }
        })
    }
};