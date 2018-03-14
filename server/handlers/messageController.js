const Message = require('../models').Message;
const Queue = require('../models').Queue;
module.exports = {

    sendMessage: (req, res) => {
        const record = req.body;
        if ((record.senderId && record.senderId ) && (record.messageContent.text || record.messageContent.image)) {
            Message.create(record).then(message => {
                Queue.create(record).then(queue => {
                    res.json({ status: 'success' });
                });
            });
        }



    }
};

