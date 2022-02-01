//express.router-->helps to keep routes and controller modules separately
const express = require('express');
//no new instance same instance passed on

const router = express.Router();//router handler
const homeController = require('../controllers/home_controller');
const profileController = require('../controllers/profile_controller');

// console.log("Router loaded");



router.get('/', homeController.home);
router.use('/users', require('./users'));


//for any further routes, access from here
//router.use('/routerName',require('./routerFile'))

module.exports = router;