var User = require('../models/user');

// Display list of all Authors.
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: User list');
}

exports.get = function(req, res) {
    res.send('NOT IMPLEMENTED: user details: ' + req.params.id);
}