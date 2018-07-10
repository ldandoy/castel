var express = require('express');
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var pagesRouter = require('./routes/pagesRouter');
var authRouter = require('./routes/authRouter');
var usersRouter = require('./routes/usersRouter');

app.use('/', pagesRouter);
app.use('/', authRouter);
app.use('/users', usersRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})