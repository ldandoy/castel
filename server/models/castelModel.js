var db = require('../db.js')

exports.getAll = function(callback) {
    db.query('SELECT * FROM castels', function (error, rows) {
        console.log('castels found');
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