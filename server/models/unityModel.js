var db = require('../db.js')

exports.getAllByCaslteId = function(data, callback) {
    db.query('SELECT `unities`.`label`, `unities`.strength, `unities`.defense, `unities`.pop, `unities`.wood_needed, `unities`.gold_needed, `unities`.stone_needed, `castels_unities`.`quantity` FROM `castels_unities` LEFT JOIN `unities` ON `unities`.`id` = `castels_unities`.`unity_id` WHERE `castels_unities`.`castel_id` = ?', [data.castelId], function (error, rows) {
        console.log('unities ' + data.castelId + ' found');
        callback(error, rows);
    });
}