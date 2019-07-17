var express = require('express');
//              npm install cookie-parser
var config = require('./config');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(config.getDbConnectionString());
app.use(require('./routes/index'));
app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/ POSTMAN');
module.exports = app;
