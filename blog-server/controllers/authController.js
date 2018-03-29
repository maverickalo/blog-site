const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user.id, iat: timestamp }, config.jwtsecret);
}

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You Must Provide an Email and Password!' });
  }
  UserModel.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in Use!' });
    }
    const user = new UserModel({
      email: email,
      password: password,
    });
    user.save(err => {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.home = (req, res) => {
  res.send({ you: 'DID IT!' });
};
exports.signIn = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
