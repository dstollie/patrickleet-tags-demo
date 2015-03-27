Items = new Meteor.Collection('items');
Tags.TagsMixin(Items);

Items.allowTags(function() {
	return true;
})
