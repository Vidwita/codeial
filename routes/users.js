const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/profile',passport.checkAuthentication, userController.Profile);
router.use('/posts',require('./posts'));


module.exports = router;