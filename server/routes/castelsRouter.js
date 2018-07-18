var express = require('express');
var router = express.Router();

// Require controller modules.
var castels_controller = require('../controllers/castelsController');
var buildings_controller = require('../controllers/buildingsController');
var unities_controller = require('../controllers/unitiesController');

// GET request list user.
router.get('/', castels_controller.list);

// GET request details castel.
router.get('/:castelId', castels_controller.get);

// GET request details castel.
router.get('/:castelId/buildings', buildings_controller.list);

// GET request details castel.
router.get('/:castelId/unities', unities_controller.list);

module.exports = router;
