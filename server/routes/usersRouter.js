var express = require('express');
var router = express.Router();

// Require controller modules.
var users_controller = require('../controllers/usersController');

// GET request list user.
router.get('/', users_controller.index);

// GET request for one User.
router.get('/:id', users_controller.get);

// GET request castel liste.
router.get('/:id/castels', users_controller.getCastels);

module.exports = router;
