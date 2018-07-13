// Display list of all castels.
var castelModel = require('../models/castelModel');

exports.list = function(req, res) {
    castelModel.getAll(function(err, results) {
        if (err) {
            throw res.send('NOT IMPLEMENTED: Castels list');
        } else {
            res.send(results);
        }
    });
    // res.send('NOT IMPLEMENTED: Castels list');
}