let Message=require('../models').Message;
module.exports = {

    sendMessage:(req, res) => {
        let {senderId,senderId,messageContent}=req.body;
        Message.create({senderId,senderId,messageContent},(result)=>{
            res.json({status:"success",data:"sent"});
        })
    }
};

