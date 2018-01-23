let model=require('../models');
module.exports = {
    signUp: (req, res) => {
        let {email, username, password}=req.body;

        if( password.length >= 8 ){
        model.User.findOne({email: email})
            .exec( (err, user) => {
                if (user) {
                    res.json({status:'User already exist!'});
                } else {
                    // make a new user if not one
                    return model.User.create({
                        username: username,
                        email: email,
                        password: password
                    },(err, newUser) =>{
                        if(err){
                            res.json(err);
                        } else {
                            res.json({status:'signup',id:newUser._id});
                        }
                    });
                }
            });
        }else
            {
            res.json({status:'the password is short'})
        }
    },
    signIn: (req, res) => {
        let {email, password}=req.body;

        model.User.findOne({email: email})
            .then((users) => {
                if (!users) {
                    res.json({status:"user not found"})
                } else {
                    users.comparePasswords(password)
                        .then( (isMatch) => {
                            if (isMatch) {
                                res.json({status:"signin",id:users._id})
                            } else {
                                res.json({status:"password not matched"})
                            }
                        });
                }
            });
    },
    getUserInfo:(req, res) => {
        let {userId}=req.body;
        model.Post.findOne({_id:userId})
         .then((data) => {
            res.json({status:"success",data})
         })
    },
    postData:function(req, res) {
    
        console.log(req.body)
        res.json('ss')
    }
};

