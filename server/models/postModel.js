 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  postContent:{
    text:{
      type:String
    },
    image:{
      type:String
    }
  }
  
});


module.exports = mongoose.model('socialnetwork_fb_post', postSchema);