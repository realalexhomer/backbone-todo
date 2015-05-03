var app = app || {};

(function () {
  'use strict';

  var Todos = Backbone.Collection.extend({

    model: app.Todo,

    completed: function() {
      return this.where({completed: true});
    },

    url: function() {
      return this.document.url() + '/todos';
    },

    remaining: function() {
      return this.where({completed: false});
    },

    nextOrder: function() {
      return this.length ? this.last().get('order') + 1 : 1;
    },

    comparator: 'order'

  })


  app.todos = new Todos();


})();