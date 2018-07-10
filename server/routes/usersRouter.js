var express = require('express');
var router = express.Router();

// Require controller modules.
var users_controller = require('../controllers/usersController');

// GET request list user.
router.get('/', users_controller.index);

// GET request for one BookInstance.
router.get('/:id', users_controller.get);

module.exports = router;
