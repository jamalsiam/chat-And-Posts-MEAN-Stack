let model=require('../models');

module.exports = {
    sharePost: (req, res) => {
        let {_id, postContent}=req.body;
        model.Post.create({userId:_id,postContent},(post)=>{
            res.json({status:"success"})
        })
    },
    deletePost: (req, res) => {
        let {userId, postId}=req.body;
        model.Post.findByIdAndRemove({userId,_id:postId}, (err, result) => {
            res.json({status:"success"})
        
        })
    },
    getProfilePost: (req, res) => {
        let {userId}=req.body;
        model.Post.find({userId})
         .then((data) => {
            res.json({status:"success", data})
         })
    },
    getOnePost: (req, res) => {
        let {postId}=req.body;
        model.Post.findOne({_id:postId})
         .then((data) => {
            res.json({status:"success", data})
         })
    }
};

