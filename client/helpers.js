Template.registerHelper('item', function() {
	return Items.findOne({name: "Foo Bar"});
})

Template.registerHelper('showItemValues', function() {
	return JSON.stringify(Items.findOne({name: "Foo Bar"}));
});

Template.registerHelper('showTags', function() {
	return JSON.stringify(Meteor.tags.find().fetch())
})