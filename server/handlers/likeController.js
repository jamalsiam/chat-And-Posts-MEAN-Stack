let model = require('../models');
module.exports = {
    putOrRemoveLike: (req, res) => {
        let { userId, postId } = req.body;  
        model.Like.findOne({ userId, postId }).then(isfound => {
            if (!isfound) {
                
                
                model.Like.create({  userId, postId  })
                .then((newFollow) => {
                    res.json({ status: "success", data: true, newFollow })
                });
            } else { 
                model.Like.remove({  userId, postId  }, function (err) {
                    if (err) return handleError(err);
                    res.json({ status: "success", data: false })
                });
            
            }
        });
    }
};

 