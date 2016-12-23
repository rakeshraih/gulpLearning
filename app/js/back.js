var Books = Backbone.Collection.extend({
  url: '/books',
  parse: function(data) {
    return data.books;
  }
});