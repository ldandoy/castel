var express = require('express');
var router = express.Router();

// Require controller modules.
var castels_controller = require('../controllers/castelsController');

// GET request list user.
router.get('/', castels_controller.list);

module.exports = router;
