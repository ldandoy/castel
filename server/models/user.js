var db = require('../db.js')

exports.getAll = function(done) {
    db.get(db.READ, function(err, connection) {
        if (err) return done('Database problem')

        connection.query('SELECT * FROM comments', function (err, rows) {
        if (err) return done(err)
            done(null, rows)
        })
    })
}