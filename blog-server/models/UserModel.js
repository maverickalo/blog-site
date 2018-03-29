const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  twitterId: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

userSchema.pre('save', function(next) {
  const user = this;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
