let model=require('../models');
module.exports = {
    putLike:(req, res)=>{
        let {userId,postId}=req.body;
        model.Like.find({userId,postId})
        .exec( (err, result) => {
            if(result){
                model.Like.findByIdAndRemove({userId,postId}, (err, result) => {
                    res.json({status:"success",data:"unlike"})
                
                })
            }
            else
            {
                model.Like.create({userId,postId})
                .then(()=>{
                    res.json({status:"success",data:"like"})
                })
            }
        })
    }
};

