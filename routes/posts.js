const express=require('express');

const router = express.Router();

const postController = require('../controllers/posts_controller');

router.post('/add',postController.addInfo);

module.exports = router;