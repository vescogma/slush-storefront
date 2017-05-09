const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules\/(?!oget)/,
    }, {
      test: /\.tag\.html$/,
      loader: 'riot-tag-loader'
    }, {
      test: /\.datauri$/,
      loader: 'raw-loader'
    }]
  }
};
