const passport = require('passport');
const User = require('../models/UserModel');
const config = require('../config');
const JwtStrat = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrat = require('passport-local');

const localLogin = new localStrat(
  { usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return err;
        }
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwtsecret,
};

const jwtLogin = new JwtStrat(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
