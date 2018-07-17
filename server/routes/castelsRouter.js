var express = require('express');
var router = express.Router();

// Require controller modules.
var castels_controller = require('../controllers/castelsController');

// GET request list user.
router.get('/', castels_controller.list);

// GET request list user.
router.get('/:castelId', castels_controller.get);

module.exports = router;
