const express = require('express');

const router = express.Router();

const signUpController = require('../controllers/signUp_controller');

router.get('/', signUpController.signUp);

router.post('/create',signUpController.create);



module.exports = router;