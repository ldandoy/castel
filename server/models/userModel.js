var db = require('../db.js')

exports.getAll = function(callback) {
    db.query('SELECT * FROM users', function (error, rows) {
        console.log('users found');
        callback(error, rows);
    });
};

exports.insert = function(user, callback) {
    db.query('INSERT INTO users SET ?', user, function (error, rows) {
        console.log('user insert', user);
        callback(error, rows);
    });
};

exports.getUserByLoginAndPassword = function (data, callback) {
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [data.username, data.password], function (error, rows, fields) {
        console.log('user find', data);
        callback(error, rows);
    });
}