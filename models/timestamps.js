var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  timestamp: Date
});

var Times = mongoose.model('timestamps', userSchema);
module.exports = Times;
