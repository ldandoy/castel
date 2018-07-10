var connection = require('../db.js');

// Display register page.
exports.register = function(req, res) {
    if (req.query.email == null && req.query.password == null && req.query.username == null) {
        msg_error = "Email et/ou password et/ou username non rempli"
        console.log("error ocurred", msg_error);
        res.send({
            "code":     400,
            "failed":   msg_error
        })
    } else {

        var today = new Date();
        var users = {
            "firstname":    req.query.firstname,
            "lastname":     req.query.lastname,
            "email":        req.query.email,
            "password":     req.query.password,
            "username":     req.query.username,
            "created_at":   today,
            "updated_at":   today
        }

        connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code":     400,
                    "failed":   "error ocurred"
                })
            } else {
                console.log('The solution is: ', results);
                res.send({
                    "code":     200,
                    "success":  "user registered sucessfully"
                });
            }
        });
    }
    // res.send('NOT IMPLEMENTED: register page');
};

// Display login page.
exports.login = function(req, res) {
    if (req.query.password == null && req.query.username == null) {
        msg_error = "Username et/ou password non rempli"
        console.log("error ocurred", msg_error);
        res.send({
            "code":     400,
            "failed":   msg_error
        })
    } else {
        var username = req.query.username;
        var password = req.query.password;
        
        connection.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send({
                    "code":     400,
                    "failed":   "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results[0].password);
                if (results.length > 0) {
                    if (results[0].password == password){
                        res.send({
                            "code":     200,
                            "success":  "login sucessfull"
                        });
                    } else {
                        res.send({
                            "code":     204,
                            "success":  "Username and password does not match"
                        });
                    }
                } else {
                    res.send({
                        "code":     204,
                        "success":  "Username and password does not match"
                    });
                }
            }
        });
    }
    // res.send('NOT IMPLEMENTED: login page');
};