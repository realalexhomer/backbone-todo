var TodoView = Backbone.View.extend({

  tagName: "li",

  template: _.template($('#todo-template').html()),

  events: {

  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }

  render: function(){
    this.$el.html(this.template())
  }

})