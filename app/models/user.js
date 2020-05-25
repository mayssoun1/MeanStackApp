var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var saltRounds = 10;

// Create a user Schema
var UserSchema = new Schema({
    username:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
});
UserSchema.pre('save',function(next){
    var user = this;
    bcrypt.hash(user.password,saltRounds,function(err,hash){
      if (err){
          return next(err);
      }
      user.password = hash;
      next();
    });
    
});


module.exports = mongoose.model('User',UserSchema);

