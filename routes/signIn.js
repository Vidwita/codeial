const express = require('express');

const router = express.Router();

const signInController = require('../controllers/signIn_controller');

router.get('/', signInController.signIn);

router.post('/create-session',signInController.createSession);

router.post('/remove-session',signInController.removeSession);


module.exports = router;