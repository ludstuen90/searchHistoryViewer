var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// var timestamp = require("unix-timestamp");
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.get('/', function (req, res){
  console.log('at base url');
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server listening on 3000');
});
