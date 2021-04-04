var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

// POST request for user signup
router.post('/Signup', userController.user_signup);

//POST request for user login
router.post('/Login', userController.user_login);

//POST request for user logout
router.post('/Logout', userController.user_logout);


module.exports = router;