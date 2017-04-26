var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
var cors = require('cors');

//var estuve = require('./routes/estuve');
var guardar = require('./routes/guardar');
var resena = require('./routes/resena');
var restaurante = require('./routes/restaurante');
var users = require('./routes/users');

var app = express();
app.use(cors());

let dbConnection;
mongodb.connect("mongodb://enjoyeating:12345@ds153775.mlab.com:53775/enjoyeating", (err,db)=>{

  if(err){
    console.log("Error:"+err);
  }else{
    console.log("Mongo Conectado");
    dbConnection = db;
  }

});

app.use((req, res, next)=>{

  req.db = dbConnection;
  next();

});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/estuve', estuve);
app.use('/guardar', guardar);
app.use('/resena', resena);
app.use('/restaurante', restaurante);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
