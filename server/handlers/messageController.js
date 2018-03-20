const Message = require('../models').Message;
const Queue = require('../models').Queue;
const User = require('../models').User;
module.exports = {

    sendMessage: (req, res) => {
        const record = req.body;
        if ((record.senderId && record.receiverId) && (record.messageContent.text || record.messageContent.image)) {
            Message.create(record).then(message => {
                Queue.create(record).then(queue => {
                    res.json({ status: 'success' });
                });
            });
        }
    },
    getMessages: (req, res) => {
        const senderId = req.body.profileId;
        const receiverId = req.body.userId;
        if (senderId && receiverId !== "undefined") {
            Message.find({ $or: [{ senderId: senderId, receiverId: receiverId }, { senderId: receiverId, receiverId: senderId }] })

                .then(message => {
                    User.findOne({ _id: receiverId })
                        .then((user) => {
                            res.json({ message, user });
                        });

                });
        }
        else {
            res.json({ data: "fail" });
        }
    },
    getMessageFromQueue: (req, res) => {
        const senderId = req.body.profileId;
        const receiverId = req.body.userId;
        if (senderId && receiverId !== "undefined") {
            Queue.find({ senderId: receiverId, receiverId: senderId })
                .then(messageInQueue => {
                    res.json({ messageInQueue })
                    //delete message from queue
                    Queue.remove({ senderId: receiverId, receiverId: senderId }, function (err) {
                        if (err) return handleError(err);
                    });
                });
        }
    },
    getSortUser: (req, res) => {
        const profile = req.body.profile;
        const arrayUser = [];
        Message.find({ $or: [{ senderId: profile }, { receiverId: profile }] }) //GET get Sort User LIST
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].senderId === profile) {
                        if (arrayUser.indexOf(data[i].receiverId) === -1) {
                            arrayUser.push(data[i].receiverId);
                        }
                    } else {
                        if (arrayUser.indexOf(data[i].senderId) === -1) {
                            arrayUser.push(data[i].senderId);
                        }
                    }
                }
                    res.json({arrayUser});
            });
    },
    getUserTitle:(req, res) => {
        const {user1, user2}= req.body;
        Queue.find({ senderId: user1, receiverId: user2 })
        .then(messageInQueue => {
            User.findOne({_id: user1}).then(userInfo => {
                res.json({notfy:messageInQueue.length, userInfo})
            })
        })
    }
};

