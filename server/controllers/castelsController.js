// Display list of all castels.
var castelModel = require('../models/castelModel');

exports.list = function(req, res) {
    castelModel.getAll(function(err, castels) {
        if (err) {
            throw res.status(500).send({ "data" :   err });
        } else {
            res.send(data.castels);
            /*for (var i = 0, len = castels.length; i < len; i++) {
                data = { 
                    'castelId': castels[i].id,
                    'castels': castels,
                    'index': i
                }
                console.log("passer", i);
                unityModel.getByCastelId(data, function(err1, unities) {
                    if (err1) {
                        throw res.status(500).send({ "data" :   err1 });
                    } else {
                        data.castels[data.index].unities = unities;
                        console.log("fin", data.index);
                        if (data.index == (len-1)) {
                            res.send(data.castels);
                        }
                    }
                });
            }*/
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
        castelModel.get(data, function(err, castel) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                if (castel.length > 0) {
                    data = { 'castelId': req.params.castelId }
                    unityModel.getByCastelId(data, function(err, unities) {
                        if (err) {
                            throw res.status(500).send({ "data" :   err });
                        } else {
                            console.log('passer');
                            castel[0].unities = unities;
                            res.send(castel);
                        }
                    });
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