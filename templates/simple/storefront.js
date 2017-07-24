new storefront({
  customerId: '<%= customerId %>',
  area: '<%= area %>',
  collection: '<%= collection %>',

  structure: {
    id: '<%= id %>',
    title: '<%= title %>'

    // define your data structure here!
  }

  // put the rest of your configuration here!
});

// attach your tags here!

storefront.mount('gb-query');
storefront.mount('gb-products');
