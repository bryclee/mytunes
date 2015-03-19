// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if (this.length === 1){
      	this.playFirst();
      }
    }, this);

  	this.on('ended', function(song){
      this.shift();
      if (this.length){
      	this.playFirst();
      }
  	}, this);

  	this.on('dequeue', function(song){
  		if (this.at(0) === song && this.length > 1) {
  			this.at(1).play();
  		} else if (this.at(0) === song && this.length === 1) {
  			this.trigger('blank', this);
  		}
  		this.remove(song);
  	}, this);
  },

  playFirst: function(){
  	this.at(0).play();
  }

});