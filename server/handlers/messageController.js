let Message=require('../models').Message;
module.exports = {

    sendMessage:(req, res) => {
        let {senderId,receiverId,messageContent}=req.body;
        Message.create({senderId,receiverId,messageContent},(result)=>{
            res.json({status:"success",data:"sent"});
        })
    }
};

