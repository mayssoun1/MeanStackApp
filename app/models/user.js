var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var saltRounds = 10;

let emailLengthChecker = (email)=>{
    if (!email){
        return false;
    }else{
        if(email.length <5 || email.length >30){
            return false;
        }else{
            return true;
        }
    }
}

const emailValidators =[
    {
        validator : emailLengthChecker, message: 'E-mail must be at least 5 characters'
    }
];
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
        unique: true,
        validate : emailValidators
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

