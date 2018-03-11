 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var commentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true
  }, 
  userId: {
    type: String,
    required: true
  },
  
  commentContent:{
    text:{
      type:String
    },
    image:{
      type:String
    }
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('socialnetwork_fb_comment', commentSchema);