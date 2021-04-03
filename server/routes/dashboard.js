var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

// GET request for user dashboard information
router.get('/user/:id', userController.user_information);

// GET request for user activity history
router.get('/user/activity', userController.user_activity_history_get);

// POST request to update user information
router.get('/user/:id/update', userController.user_update_post);

module.exports = router;