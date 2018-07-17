var express = require('express');
var router = express.Router();

// Require controller modules.
var users_controller = require('../controllers/usersController');

// GET request list user.
router.get('/', users_controller.list);

// GET request for one User.
router.get('/:userId', users_controller.get);

// GET request castel liste.
router.get('/:userId/castels', users_controller.getCastels);

module.exports = router;
