const express = require('express');
const config = require('./config');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = require('./routes/router');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router)
//CHECKED and working.
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true })
    .then(()=> {
        console.log('Connected to database!');
    }).catch(() => {
        console.log('Connection failed');
    });
mongoose.set('useFindAndModify', false);

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080');
module.exports = app;
