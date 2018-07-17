var castelModel = require('../models/castelModel');
var userModel = require('../models/userModel');

// Display list of all Users.
exports.list = function(req, res) {
    userModel.getAll(function(err, results) {
        if (err) {
            throw res.status(500).send({ "data" :   err });
        } else {
            res.send(results);
        }
    });
}

// Display a User.
exports.get = function(req, res) {
    if (req.params.userId != null) {
        userId = req.params.userId;

        data = {
            'userId': userId
        }
    
        console.log(data, userId);
    
        userModel.get(data, function(err, results) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                res.send(results);
            }
        });
    } else {
        msg_error = "userId non fourni"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    }
}

// Display list of all Castels for a user.
exports.getCastels = function(req, res) {
    if (req.params.userId != null) {
        userId = req.params.userId;

        data = {
            'userId': userId
        }
    
        console.log(data, userId);
    
        castelModel.getUserCastels(data, function(err, results) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                res.send(results);
            }
        });
    } else {
        msg_error = "userId non fourni"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    }
}