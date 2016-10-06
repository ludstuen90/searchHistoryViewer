var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
// app.use(express.bodyParser({limit: '50mb'}));
var mongoose = require('mongoose');


// var Times = require('../models/timestamps');

mongoose.connect('mongodb://localhost:27017/timestamps');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));



app.get('/', function (req, res){
  console.log('at base url');
  res.sendFile(path.resolve('public/views/index.html'));
});

app.post('/sendTimes', function(req, res){
  console.log(req.body);
  res.sendStatus(200);
});


app.listen(process.env.PORT || 3000, function() {
  console.log('server listening on 3000');
});
