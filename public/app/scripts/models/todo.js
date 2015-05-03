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


})();