let model=require('../models');
module.exports = {
    follow:(req, res)=>{
       
        let {followerId,followingId}=req.body;
        model.Follow.findOne({followerId:followerId,followingId:followingId})
        .exec( (err, result) => {
            if(!result){
                model.Follow.create({followerId:followerId,followingId:followingId})
                .then((re)=>{
                    res.json({status:"success",data:"unfollow"})
                })
               
            }
            else
            {
                 model.Follow.findByIdAndRemove({followerId,followingId}, (err, result) => {
                    res.json({status:"success",data:"follow"})
                
                })
            }
        })
    },
    checkIfFollow:(req,res) => {
        let {followerId ,followingId}=req.body;
        model.Follow.findOne({followerId ,followingId}).then((ress)=>{
            
            if(ress==null){
                res.json({data:"Follow"})
            }
            else
            {
                res.json({data:"Unfollow"})
            }
        })



        
    }

};

