const express = require('express');
const router = express.Router();
const passport = require('passport');




const signOutController = require('../controllers/signOut_controller');

router.get('/', signOutController.destroySession);



module.exports = router;