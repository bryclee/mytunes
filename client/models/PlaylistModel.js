var PlaylistModel = Backbone.Model.extend({
	initialize: function(songQueue){

		this.set('active', false);

		this.set('name', 'Playlist');

		this.set('songQueue', songQueue);

		this.get('songQueue').on('add', function(song){
	      if (this.get('active') === true) {
		      if (this.get('songQueue').length === 1){
		      	this.playFirst();
	        }
	      }
	    }, this);

	  	this.get('songQueue').on('ended', function(song){
	        if (this.get('active') === true) {
		       this.get('songQueue').shift();
		        if (this.get('songQueue').length){
		          this.playFirst();
		        }
		    }
	  	}, this);

	  	this.get('songQueue').on('dequeue', function(song){
	  		if (this.get('active') === true) {
		  		if (this.get('songQueue').at(0) === song && this.get('songQueue').length > 1) {
		  			this.get('songQueue').at(1).play();
		  		} else if (this.get('songQueue').at(0) === song && this.get('songQueue').length === 1) {
		  			this.trigger('blank', this);
		  		}
		  		this.get('songQueue').remove(song);
	  	    }
	  	}, this);
	},
	
	add: function(song){
		this.get('songQueue').add(song);
	},

	playFirst: function(){
	  	this.get('songQueue').at(0).play();
	}
});