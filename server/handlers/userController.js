const model = require('../models');
module.exports = {
    signUp: (req, res) => {
        let { email, username, password } = req.body;

        if (password.length >= 8) {
            model.User.findOne({ email: email })
                .exec((err, user) => {
                    if (user) {
                        res.json({ status: 'User already exist!' });
                    } else {
                        // make a new user if not one
                        return model.User.create({
                            username: username,
                            email: email,
                            password: password
                        }, (err, newUser) => {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json({ status: 'signup', id: newUser._id });
                            }
                        });
                    }
                });
        } else {
            res.json({ status: 'the password is short' })
        }
    },
    signIn: (req, res) => {
        let { email, password } = req.body;

        model.User.findOne({ email: email })
            .then((users) => {
                if (!users) {
                    res.json({ status: "user not found" })
                } else {
                    users.comparePasswords(password)
                        .then((isMatch) => {
                            if (isMatch) {
                                res.json({ status: "signin", id: users._id })
                            } else {
                                res.json({ status: "password not matched" })
                            }
                        });
                }
            });
    },
    getUserInfo: (req, res) => {
        let { userId } = req.body;

        if (userId != 'null') {
            model.User.findOne({ _id: userId })
                .then((data) => {
                    model.Post.find({ userId })
                        .sort('-_id')
                        .then((post) => {
                            model.Follow.find({ followerId: userId }, (err, follower) => {
                                model.Follow.find({ followingId: userId }, (err, following) => {
                                    res.json({ status: "success", userInfo: data, id: userId, post: post, follow: { follower, following } })
                                })
                            })
                        })
                })
        }
    },
    postData: function (req, res) {


    },
    signUpAsGuest: (req, res) => {
        let randomId = Math.floor(Math.random() * (9000000000 - 1000000000)) + 1000000000;
        model.User.find({ email: randomId + '@guest.com' }).then((result) => {
            if (result == '') {
                model.User.create({
                    username: 'Guest',
                    email: randomId + '@guest.com',
                    password: randomId,
                }, (err, newUser) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json({ status: 'signup', id: newUser._id });
                    }
                });
            } else {

                res.json({ status: 'recall' });
            }
        })
    },
    changeProfileImage: (req, res) => {
        let { image, _id } = req.body;
        console.log(_id)
        //model.User.update({ image, _id }).then(() => {

        //});
        model.User.update({_id}, {
            image
        }, function(err, affected, resp) {
           console.log(resp);
        })
         
    
}
}