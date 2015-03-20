var ButtonModel = Backbone.Model.extend({

  addPlaylist: function(){
    this.trigger('addPlaylist', this);
  }

})