Template.tagInput.rendered = function () {
  var that = this;
  this.$('.tag-input').selectize({
    valueField: 'name',
    labelField: 'name',
    searchField: ['name'],
    create: function(input, cb) {
      console.log('create tag: ', input)
      Items.addTag(input, {_id: that.data._id});
      var tag =  Meteor.tags.findOne({collection: 'items', name: input});
 
      if (cb) {
        cb(tag);
      } 
 
      return tag;
    },
    options: Meteor.tags.find({collection: 'items'}).fetch(),
    render: {
        item: function(item, escape) {
            return '<div>' +
              (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
            '</div>';
        },
        option: function(item, escape) {
            var name = item.name;
            var caption = item.nRefs;
            return '<div>' +
                '<span class="name">' + escape(name) + '</span>&nbsp;' +
                (caption ? '<span class="badge">' + escape(caption) + '</span>' : '') +
            '</div>';
        }
    },
    onItemAdd: function(value, $item) {
      console.log('add tag: ', value);
      console.log(that.data);
      Items.addTag(value, {_id: that.data._id});
    },
    onItemRemove: function(value) {
      console.log('remove tag: ', value);
      Items.removeTag(value, {_id: that.data._id});
    }
  });
};


Template.tagInput.helpers({
  item: function() {
    return JSON.stringify(this.data);
  }
})