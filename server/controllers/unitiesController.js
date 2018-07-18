// Display list of all buildings.
var unityModel = require('../models/unityModel');

exports.list = function(req, res) {
    if (req.params.castelId != null) {
        castelId = req.params.castelId;

        data = {
            'castelId': castelId
        }
    
        console.log(data, castelId);
    
        unityModel.getAllByCaslteId(data, function(err, unities) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                res.send(unities);
            }
        });
    } else {
        msg_error = "castelId non fourni"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    }
}