var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  userId: {type:String, required:'{PATH} is required!'},
  title: {type:String, required:'{PATH} is required!'},
  description: {type:String, required:'{PATH} is required!'},
  date: {type:Date, default: Date.now},
  completed: {type:Boolean, required: '{PATH} is required!'}
});

var Todo = mongoose.model('Todo', todoSchema);
