import '../css/main.scss';

const app = new storefront({
  customerId: '<%= customerId %>',
  area: '<%= area %>',
  collection: '<%= collection %>',

  structure: {
    id: '<%= id %>',
    title: '<%= title %>',
    price: '<%= price %>',
    image: '<%= imageurl %>'

    // define your data structure here!
  },

  search: {
    fields: ['*']
  },

  autocomplete: {
    navigations: {
      // ADD Navigations Here
      // 'data.navigation.name': 'Customer Friendly Name',

    },
    products: {
      count: <%= autocompleteProductCount %>
    },
    recommendations: false
  },

  services: {
    logging: {
      level: 'debug',
      debug: {
        // tracker: true,
        // flux: true,
        // lifecycle: true,
        // aliasing: true,
        // observer: true,
      }
    },
    recommendations: false
  }

  // put the rest of your configuration here!
});

// attach your top-level components here!
// components nested under <app> will be mounted automatically

app.mount('app');
