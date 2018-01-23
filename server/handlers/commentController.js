let model=require('../models');

module.exports = {
    putComment: (req ,res) =>{
        let {userId, commentContent}=req.body;
        model.Comment.create({userId,commentContent},(result)=>{
            res.json({status:"success"})
        })
    },
    deleteComment: (req, res)=>{
        let {userId, postId}=req.body;
        model.Comment.findByIdAndRemove({userId, _id: commentId}, (err, result) => {
            res.json({status:"success"})
        })
    },
    getCommentPost:(req ,res)=>{
        let={postId}
        model.Comment.find({postId})
        .then((data) => {
           res.json({status:"success", data})
        })
    }
};