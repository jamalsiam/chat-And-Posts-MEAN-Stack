 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var FollowSchema = new mongoose.Schema({
  followerId: {
    type: String,
    required: true
  }, 
  followingId: {
    type: String,
    required: true
  }
  
});


module.exports = mongoose.model('socialnetwork_fb_follow', FollowSchema);