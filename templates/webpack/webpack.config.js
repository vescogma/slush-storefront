const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',

  devtool: 'source-map',

  output: {
    path: path.resolve('bundle')
  },

  plugins: [
    new HTMLPlugin({ template: 'index.html' }),
    new ExtractTextPlugin('styles.css'),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3100/'
      },
      { reload: false })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }, {
      test: path.resolve(__dirname, 'index.html'),
      loader: 'html-loader',
      options: { interpolate: true }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, plugins: (loader) => [require('autoprefixer')()] }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }],
        fallback: 'style-loader'
      })
    }]
  },

  devServer: {
    port: 6400,
    overlay: true,
    historyApiFallback: true
  }
};
