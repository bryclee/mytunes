var ButtonView = Backbone.View.extend({
  
  tagName: 'button',

  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      console.log('click');
      this.model.addPlaylist();
    }
  },

  render: function() {
    this.$el.html('Add Playlist');
  }

})