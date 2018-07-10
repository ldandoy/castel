var express = require('express');
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/authController');

// GET request list user.
router.post('/register', auth_controller.register);

// GET request for one BookInstance.
router.post('/login', auth_controller.login);

// GET request for one BookInstance.
router.get('/me', auth_controller.me);

module.exports = router;
