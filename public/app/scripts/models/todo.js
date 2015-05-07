var app = app || {};

(function () {
  'use strict';

  app.Todo = Backbone.Model.extend({

    initialize: function(){
      console.log('Creating a new todo');
    },
    
    defaults: {
      title: '',
      completed: false,
      description: ''
    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    },

    url: '/api/todos'

    

  });

  var TodoCollection = Backbone.Collection.extend({
    url: '/api/todos',
    model: app.Todo,

    done: function(){
      return this.where({done: true});
    },

    remaining: function() {
      return this.where({done: false});
    }
});


  app.Todos = new TodoCollection;
  app.Todos.fetch();


})();