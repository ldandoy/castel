var db = require('../db.js');
var unityModel = require('../models/unityModel');

exports.getAll = function(callback) {
    db.query('SELECT * FROM castels', function (error, rows) {
        console.log('castels found');

        for (var i = 0, len = rows.length; i < len; i++) {
            console.log(i);
            data = { 
                'castelId': rows[i].id,
                'i': i
            }
            unityModel.getByCastelId(data, function(err1, unities) {
                if (err1) {
                    throw res.status(500).send({ "data" :   err1 });
                } else {
                   console.log("fin", data);
                }
            });

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

        callback(error, rows);
    });
}

exports.get = function(data, callback) {
    db.query('SELECT * FROM castels WHERE id = ?', [data.castelId], function (error, rows) {
        console.log('castel ' + data.castelId + ' found', rows);
        callback(error, rows);
    });
}

exports.getUserCastels = function(data, callback) {
    db.query('SELECT * FROM castels WHERE user_id = ?', [data.userId], function (error, rows) {
        console.log('castels found');
        callback(error, rows);
    });
}

exports.getCastelByUserAndId = function(data, callback) {
    db.query('SELECT * FROM castels WHERE user_id = ? AND id = ?', [data.userId, data.id], function (error, rows) {
        console.log('castel ' + data.id + ' found', rows);
        callback(error, rows);
    });
}

/*exports.getByUserId = function (data, callback) {
    db.query('SELECT * FROM castels WHERE user_id = ?', [data.userId], function (error, rows) {
        console.log('castels find', data);
        callback(error, rows);
    });
}

exports.update = function (data, callback) {
    var today = new Date();
    db.query('UPDATE castels SET label = ?, points = ?, updated_at = ? WHERE id = ?', [data.label, data.points, today, data.id], function (error, rows) {
        console.log('castel updated', data);
        callback(error, rows);
    });
}*/