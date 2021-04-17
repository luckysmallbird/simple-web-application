var express = require('express');
var logger = require('morgan');

var get_router = require('./routes/get');
var set_router = require('./routes/set');
var ListenConf = require('./ListenConf');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/get', get_router);
app.use('/set', set_router);

app.listen(ListenConf.port, function(){
    console.log('Server is starting on '+ ListenConf.port +' port');
});

module.exports = app;
