const bdd_host = 'localhost'
const bdd_bdd = 'castel'
const bdd_user = 'castel'
const bdd_pwd = '5aE8BsdDhudzb4Ms'
const bdd_port = 3306

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: bdd_host,
    port: bdd_port,
    user: bdd_user,
    password: bdd_pwd,
    database: bdd_bdd,
//    insecureAuth: true
});

connection.connect();

module.exports = connection;