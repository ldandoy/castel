var express = require('express');
var router = express.Router();

// Require controller modules.
var pages_controller = require('../controllers/pagesController');

// GET request home page.
router.get('/', pages_controller.home);

module.exports = router;