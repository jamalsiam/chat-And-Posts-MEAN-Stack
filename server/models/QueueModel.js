 
var mongoose = require('mongoose');
 

// use schema to add it to mongo data base
var queueSchema = new mongoose.Schema({
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
  },
  date:{
    type:Number,
    default: Date.parse( new Date())
  }
 
});


module.exports = mongoose.model('socialnetwork_fb_queue', queueSchema);