searchandiser({
  customerId: '<%= customerId %>',

  structure: {
    title: 'title',
    price: 'price'

    // define your data structure here!
  },

  // disable tracker to hide errors if not configured for client
  services: {
    tracker: false
  }

  // put the rest of your configuration here!
});

// attach your tags here!

// searchandiser.attach('gb-query');
// searchandiser.attach('gb-results');
