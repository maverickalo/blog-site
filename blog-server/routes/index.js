const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const authController = require('../controllers/authController');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/register', authController.register);

router.post('/signin', requireSignin, authController.signIn);

router.get('/', requireAuth, authController.home);

module.exports = router;
