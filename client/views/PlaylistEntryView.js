PlaylistEntryView = Backbone.View.extend ({

	tagName: 'option',


	render: function() {
		return this.$el.html(this.model.get('name'));

	}


});