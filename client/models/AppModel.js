// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('activePlaylist', new PlaylistModel(new SongQueue()));
    this.get('activePlaylist').set('active', true);
    //the current playlist
    //this.set('playlists', new SongQueueList(this.get('songQueue')));
    this.set('songQueueList', new SongQueueList(this.get('activePlaylist')));

    this.set('addButton', new ButtonModel());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      //call .add() on the playlist that is selected
      this.get('activePlaylist').add(song) //
    }, this);

    this.get('activePlaylist').on('blank', function() {
      this.set('currentSong', new SongModel());
    }, this);

    this.get('addButton').on('addPlaylist', function() {
      console.log('adding a playlist');
      this.get('songQueueList').add(new PlaylistModel(new SongQueue()));
    }, this)
  }

});
