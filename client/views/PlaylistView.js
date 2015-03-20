var PlaylistView = Backbone.View.extend ({

	tagName: 'select',

	initialize: function () {
		this.render();
		var self = this;
		this.$el.on('change', function() {
			console.log('index: ', self.$el.val())
		}),

		this.collection.on('add', this.render, this)
	},

	render: function () {
    this.$el.children().detach();

		this.$el.append(this.collection.map( function (model) {
			return new PlaylistEntryView({model: model}).render();
		}));
	},
});
