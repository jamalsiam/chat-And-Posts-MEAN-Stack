const jwt = require("jsonwebtoken");

const model = require("../models");

const customerService = newUserId => {
  const Message = model.Message;
  const Queue = model.Queue;
  const User = model.User;
  const record = {
    senderId: "5aee242997eb5c3d2c7f1395",
    receiverId: newUserId,
    messageContent: {
      text:
        "Welcome ,Thank for signup at our website, If you have any idea or feedback ,Please do not hesitate to contact me on my E-mail: ( jamalsiam1995@gmail.com ) or my mobile number ( 962780016378 )",
      image: ""
    }
  };
  Message.create(record).then(message => {
    Queue.create(record).then(queue => {
      res.json({ status: "success" });
    });
  });
};
module.exports = {
  signUp: (req, res) => {
    let { email, username, password } = req.body;

    if (password.length >= 8) {
      model.User.findOne({ email: email }).exec((err, user) => {
        if (user) {
          res.json({ status: "User already exist!" });
        } else {
          // make a new user if not one
          return model.User.create(
            {
              username: username,
              email: email,
              password: password
            },
            (err, newUser) => {
              if (err) {
                res.json(err);
              } else {
                const token = jwt.sign({ id: newUser._id }, "NodeJS123");
                console.log({ status: "signup", id: newUser._id, token });

                res.json({ status: "signup", id: newUser._id, token });
                customerService(newUser._id);
              }
            }
          );
        }
      });
    } else {
      res.json({ status: "the password is short" });
    }
  },
  signIn: (req, res) => {
    let { email, password } = req.body;

    model.User.findOne({ email: email }).then(users => {
      if (!users) {
        res.json({ status: "user not found" });
      } else {
        users.comparePasswords(password).then(isMatch => {
          if (isMatch) {
            const token = jwt.sign({ id: users._id }, "NodeJS123");
            res.json({ status: "signin", id: users._id, token });
          } else {
            res.json({ status: "password not matched" });
          }
        });
      }
    });
  },
  getUserInfo: (req, res) => {
    let { userId } = req.body;

    if (userId != "null") {
      model.User.findOne({ _id: userId }).then(data => {
        model.Post.find({ userId })
          .sort("-_id")
          .then(post => {
            model.Follow.find({ followerId: userId }, (err, follower) => {
              model.Follow.find({ followingId: userId }, (err, following) => {
                res.json({
                  status: "success",
                  userInfo: data,
                  id: userId,
                  post: post,
                  follow: { follower, following }
                });
              });
            });
          });
      });
    }
  },
  signUpAsGuest: (req, res) => {
    let randomId =
      Math.floor(Math.random() * (9000000000 - 1000000000)) + 1000000000;
    model.User.find({ email: randomId + "@guest.com" }).then(result => {
      if (result == "") {
        model.User.create(
          {
            username: "Guest",
            email: randomId + "@guest.com",
            password: randomId
          },
          (err, newUser) => {
            if (err) {
              res.json(err);
            } else {
              const token = jwt.sign({ id: newUser._id }, "NodeJS123");
              res.json({ status: "signup", id: newUser._id, token });
              customerService(newUser._id);
            }
          }
        );
      } else {
        res.json({ status: "recall" });
      }
    });
  },
  changeProfileImage: (req, res) => {
    let { image, _id } = req.body;

    model.User.update(
      { _id },
      {
        image
      },
      function (err, affected, resp) {
        res.json({ status: "succses" });
      }
    );
  },
  changeProfileCover: (req, res) => {
    let { cover, _id } = req.body;

    model.User.update(
      { _id },
      {
        cover
      },
      function (err, affected, resp) {
        res.json({ status: "succses" });
      }
    );
  },
  changeProfileInfo: (req, res) => {
    let {
      username,
      work,
      location,
      relationship,
      gender,
      birth,
      _id
    } = req.body;
    model.User.update(
      { _id },
      {
        username,
        location,
        relationship,
        gender,
        work,
        birth
      },
      function (err, affected, resp) {
        res.json({ status: "succses" });
      }
    );
  },
  changeUserInterests: (req, res) => {
    let { interests, _id } = req.body;
    model.User.update(
      { _id },
      {
        interests
      },
      function (err, affected, resp) {
        res.json({ status: "succses" });
      }
    );
  },
  getUserProfile: (req, res) => {
    let id = req.body.query.id;
    model.User.findOne({ _id: id }) // GET USER INFO
      .select(
        "username phone address email image cover work location relationship gender birth interests"
      )
      .then(userDate => {
        if (!userDate || !req.body.profile) {
          // Check if correct id
          res.json({ status: "fail" });
        }

        model.Post.find({ userId: userDate._id }) //GET USER POST
          .then(postData => {
            model.Follow.find({
              $or: [{ followerId: userDate._id }, { followingId: userDate._id }]
            }) //GET FOLLOW LIST
              .then(followData => {
                let followingFromMe = () => {
                  for (let i = 0; i < followData.length; i++) {
                    if (followData[i].followingId == req.body.profile) {
                      return true;
                    }
                  }
                  return false;
                };
                res.json({
                  userDate,
                  postData,
                  followData,
                  followingFromMe: followingFromMe()
                });
              });
          });
      });
  },
  checkToken: (req, res) => {
    try {
      if (jwt.verify(req.body.token, "NodeJS123").id === req.body.id) {
        res.status(200).send(true);
      } else {
        res.status(200).json(false);
      }
    } catch (error) {
      res.status(200).json(false);
    }
  }
};
