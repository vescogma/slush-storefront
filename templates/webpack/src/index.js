import storefront from '@storefront/core';

import '@storefront/structure';

import '@storefront/did-you-mean';
import '@storefront/related-queries';
import '@storefront/query';
import '@storefront/record-count';
import '@storefront/paging';
import '@storefront/sort';
import '@storefront/collections';
import '@storefront/template';
import '@storefront/sayt';
import '@storefront/navigation';
import '@storefront/page-size';
import '@storefront/products';
import '@storefront/breadcrumbs';
import '@storefront/details';

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
