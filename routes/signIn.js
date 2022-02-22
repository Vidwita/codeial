const express = require('express');

const router = express.Router();

const signInController = require('../controllers/signIn_controller');

router.get('/', signInController.signIn);



module.exports = router;