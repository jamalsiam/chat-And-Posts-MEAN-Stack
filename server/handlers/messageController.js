const Message = require('../models').Message;
const Queue = require('../models').Queue;
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
     /*!*/
        const senderId=req.body.profileId;
        const receiverId=req.body.userId;
            Message.find({ $or: [{ followerId: userDate._id }, { followingId: userDate._id }] })
            .then(message => {
            });
    /*!*/
    }
};

