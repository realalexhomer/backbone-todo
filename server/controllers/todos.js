var Todo = require('mongoose').model('Todo');

exports.getTodos = function(req,res) {
  Todo.find({}).exec(function(err,collection){
    res.send(collection);
  });
};

exports.getTodosById = function(req, res){
  Todo.findOne({_id:req.params.id}).exec(function(err,todo){
    res.send(todo);
  });;

exports.createTodo = function(req, res){
  console.log(req.body);
}