import { searchandiser } from 'searchandiser-ui';

searchandiser({
  customerId: '<%= customerId %>',
  // collection: 'default',
  // area: 'Production',

  structure: {
    title: 'title',
    price: 'price'

    // define your data structure here!
  },

  // disable tracker to hide errors if not configured for client
  services: { tracker: false }

  // put the rest of your configuration here!
});
