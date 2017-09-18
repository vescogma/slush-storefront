storefront.polyfill(() => {

  var app = new storefront({
  customerId: '<%= customerId %>',
  area: '<%= area %>',
  collection: '<%= collection %>',

  structure: {
    id: '<%= id %>',
    title: '<%= title %>',
    price: '<%= price %>',
    image: '<%= imageurl %>',

  },
  search: {
    fields: ['*']
  },
  autocomplete: {

      //Uncomment for to use keyword recommendations
      // recommendations: {
      //   suggestionCount: 4,
      //   suggestionMode: 'popular'
      // },

      navigations: {
        // ADD Navigations Here
        // 'data.navigation.name': 'Customer Friendly Name',

      },
      products: {
        count: <%= prodCount %>
      }
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
      }
      recommendations: <%= recommend %>
    },
    options: {
      stylish: false
    },
    tags: {
      sayt: {
        recommendations: <%= recommend %>
      }
    }
  });

  app.mount('app');
});
