var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    todoModel = require('../models/Todo');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('todo db opened');
  });

};