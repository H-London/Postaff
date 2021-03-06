const router = require('express').Router();
const GenData = require('./dataGenerator');
const AuthCtrl = require('./controllers/authenticationController');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.route('/users/login')
  .post(requireLogin, AuthCtrl.login);

router.route('/users/signup')
  .post(AuthCtrl.signup);

router.route('/users/generate')
  .get(GenData.initAccounts);

module.exports = router;
