var db = require('../db.js');

exports.getAllByCaslteId = function(data, callback) {
    db.query('SELECT building_id as id, `level`, label, wood_needed, gold_needed, stone_needed, pop_need FROM `castels_buildings` LEFT JOIN buildings ON (buildings.id = castels_buildings.building_id) WHERE castels_buildings.castel_id = ?', [data.castelId], function (error, rows) {
        console.log('buildings found', rows);
        callback(error, rows);
    });
}