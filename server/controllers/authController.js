var userModel = require('../models/userModel');

// Display register page.
exports.register = function(req, res) {
    if (req.query.email == null && req.query.password == null && req.query.username == null) {
        msg_error = "Email et/ou password et/ou username non rempli"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data":   msg_error
        });
    } else {
        var today = new Date();
        var user = {
            "firstname":    req.query.firstname,
            "lastname":     req.query.lastname,
            "email":        req.query.email,
            "password":     req.query.password,
            "username":     req.query.username,
            "created_at":   today,
            "updated_at":   today
        }

        userModel.insert(user, function(err, results) {
            if (err) {
                throw err;
            } else {
                user.id = results.insertId;
                delete user.password;
                res.send(user);
            }
        });
    }
};

// Display login page.
exports.login = function(req, res) {
    if (req.query.password == null && req.query.username == null) {
        msg_error = "Username et/ou password non rempli"
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    } else {
        data = {
            username: req.query.username,
            password: req.query.password
        }

        userModel.getUserByLoginAndPassword(data, function(err, results) {
            if (err) {
                throw err;
            } else {
                if (results.length > 0) {
                    user = results[0];
                    delete user.password;
                    req.session.user = user;
                    res.send(user);
                } else {
                    msg_error = "Username and password don't match"
                    res.status(404).send({
                        "data" :   msg_error
                    });
                }
            }
        });
    }
};

exports.me = function(req, res) {

    console.log("session", req.session.user);
    if (req.session.user === undefined) {
        msg_error = "Vous n'êtes pas connecté."
        console.log("error ocurred", msg_error);
        res.status(400).send({
            "data" :   msg_error
        });
    } else {
        res.send(req.session.user);
    }
};