var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// use schema to add it to mongo data base
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  phone:{
    type:String,
    default:9627000000
  },
  address:{
    type:String,
    default:"amman"
  },
  email:{
    type:String,
    required:true
  },
  image:{
    type:String,
    default:""
  },
  cover:{
    type:String,
    default:""
  },
  work:{
    type:String,
    default:""
  },
  location:{
    type:String,
    default:""
  },
  relationship:{
    type:String,
    default:""
  },
  gender:{
    type:String,
    default:""
  },
  birth:{
    type:String,
    default:""
  },
  interests:{
    type:Array,
    default:[]
  },
  status:{
    type:Boolean,
    default:false,
    required:false
  }
});




UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('socialnetwork_fb_user', UserSchema);




