var castelModel = require('../models/castelModel');

// Display list of all Users.
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: User list');
}

exports.get = function(req, res) {
    res.send('NOT IMPLEMENTED: user details: ' + req.params.id);
}

exports.getCastels = function(req, res) {
    if (req.path.userId == req.session.user.id) {
        user_id = req.session.user.id;
    } else {
        user_id = req.path.userId;
    }
    
    data = {
        'user_id': user_id
    }

    console.log(data, req.path.userId);

    castelModel.getUserCastels(data, function(err, results) {
        if (err) {
            throw res.send('NOT IMPLEMENTED: Castels list');
        } else {
            res.send(results);
        }
    });
}