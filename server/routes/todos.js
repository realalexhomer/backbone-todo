var Todo = require('mongoose').model('Todo');


module.exports = function(router){

  router.route('/todos')
  .post(function(req, res){
    var todo = new Todo(req.body);
    todo.save(function(err){
      if (err) res.send(err);
    })
  })

  .get(function(req, res){
    Todo.find(function(err, todos){
      if (err) res.send(err);
      res.json(todos);
    });
  });

router.route('/todos/:todo_id')
  
  .get(function(req, res) {
      Todo.findById(req.params.todo_id, function(err, todo){
        if (err) res.send(err);
        res.json(todo);
      })
  
  })

  .delete(function(req, res) { // not working yet
      Todo.findOneAndRemove(req.params.todo_id, function(err, todo){
        if (err) res.send(err);
        res.send('Todo successfully deleted.')
      })

  })

};