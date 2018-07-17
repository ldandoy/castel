// Display list of all castels.
var castelModel = require('../models/castelModel');

exports.list = function(req, res) {
    castelModel.getAll(function(err, results) {
        if (err) {
            throw res.status(500).send({ "data" :   err });
        } else {
            res.send(results);
        }
    });
}

exports.get = function(req, res) {
    if (req.params.castelId == null) {
        msg_error = "castelId non fourni"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    } else {
        data = { 'castelId': req.params.castelId }
        castelModel.get(data, function(err, results) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                if (res.length > 0) {
                    res.send(results);
                } else {
                    msg_error = "castel non trouvé"
                    console.log("error ocurred", msg_error);
                    res.status(404).send({
                        "data" :   msg_error
                    });
                }
            }
        });
    }
}