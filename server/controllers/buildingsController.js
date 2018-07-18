// Display list of all buildings.
var buildingModel = require('../models/buildingModel');

exports.list = function(req, res) {
    if (req.params.castelId != null) {
        castelId = req.params.castelId;

        data = {
            'castelId': castelId
        }
    
        console.log(data, castelId);
    
        buildingModel.getAllByCaslteId(data, function(err, buildings) {
            if (err) {
                throw res.status(500).send({ "data" :   err });
            } else {
                res.send(buildings);
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