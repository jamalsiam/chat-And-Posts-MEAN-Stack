 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
    required: true
  },
  receiverId: {
    type: String,
    required: true
  },
  messageContent:{
    text:{
      type:String
    },
    image:{
      type:String
    }
  }
});


module.exports = mongoose.model('socialnetwork_fb_message', messageSchema);