 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var likeSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true
  }, 
  UserId: {
    type: String,
    required: true
  }
  
});


module.exports = mongoose.model('socialnetwork_fb_like', likeSchema);