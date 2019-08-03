var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var methodOverride = require('method-override')


var app = express();

var router = require('./controller/router')

var logger = require('morgan')

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use('/',router)
app.use('/pharmacy',router)


app.listen(3000);