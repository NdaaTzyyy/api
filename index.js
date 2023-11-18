var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
var bodyParser = require('body-parser');

var apiRouter = require('./router/api')
var HTTP_PORT = 4000

var app = express();

app.use(cors({ origin: '*' }));
app.set('json spaces', 2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'hasil')));

app.use('/api', apiRouter);

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

module.exports = app;
