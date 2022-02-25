const express = require('express');
const router = express.Router();
const passport = require('passport');




const signInController = require('../controllers/signIn_controller');

router.get('/', signInController.signIn);
//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/signIn/'},
), signInController.createSession);


module.exports = router;