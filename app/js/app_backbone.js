// Backbone App.js

var app = app || {};

var ProductListModel = Backbone.Model.extend({
    // Set default values.
    defaults: {}
});

var ProductListCollection = Backbone.Collection.extend({
    model: ProductListModel,
    url: '/js/data/wine_list.json',
    parse: function(data) {
        return data;
    },
    initialize: function() {
        //this.fetch();

    }
});


var products = new ProductListCollection();
products.fetch();

var ProductListItemView = Backbone.View.extend({

    el: '#wine-cellar-list',
    render: function() {
        // This is method that can be called
        // once an object is init. You could 
        // also do this in the initialize event
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(this.collection.toJSON());
        this.$el.html(html);
        return this;
    },
    initialize: function() {
        this.collection.on('add', this.render, this)
    }
});

// Create instances of the views
var productView = new ProductListItemView({
    collection: products
});

$(function() {

    productView.render();

});
