let model=require('../models');
module.exports = {
    follow:(req, res)=>{
       
        let {followerId,followingId}=req.body;
        model.Follow.find({followerId,followingId})
        .exec( (err, result) => {
            if(result){
                model.Follow.findByIdAndRemove({followerId,followingId}, (err, result) => {
                    res.json({status:"success",data:"unfollow"})
                
                })
            }
            else
            {
                model.Follow.create({followerId,followingId})
                .then(()=>{
                    res.json({status:"success",data:"follow"})
                })
            }
        })
    }
};

