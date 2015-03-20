var PlaylistView = Backbone.View.extend ({

	tagName: 'select',

	initialize: function () {
		this.render();

		this.collection.on('add', this.render, this);
	},

	render: function () {
    this.$el.children().detach();

		this.$el.append(this.collection.map( function (model) {
			return new PlaylistEntryView({model: model}).render();
		}));
	},
});
