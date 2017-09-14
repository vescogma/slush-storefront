
const app = new storefront({
  customerId: '<%= customerId %>',
  area: '<%= area %>',
  collection: '<%= collection %>',

  structure: {
    id: '<%= id %>',
    title: '<%= title %>'
    price: '<%= price %>',
    image: '<%= image-url %>',

  },
  search: {
    fields: ['*']
  },
  autocomplete: {
      recommendations: {
        suggestionCount: 4,
        suggestionMode: 'popular'
      },
      navigations: {
        // ADD Navigations Here
        // 'data.navigation.name': 'Customer Friendly Name',

      },
      products: {
        count: 8
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
  },
  options: {
    stylish: false
  },
  tags: {
    sayt: {
      recommendations: true
    }
  }
});


storefront.mount('app');
