const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

const indexHtml = path.resolve(__dirname, 'index.html');

module.exports = {
  entry: './src/index',

  devtool: 'source-map',

  output: {
    path: path.resolve('bundle')
  },

  plugins: [
    new HTMLPlugin({ template: 'index.html' }),
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
      test: indexHtml,
      loader: 'html-loader',
      options: { interpolate: true }
    }, {
      test: /\.html$/,
      exclude: indexHtml,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      include: [
        /src\/tags/,
        /node_modules/
      ],
      use: [
        'to-string-loader',
        'css-loader'
      ]
    }, {
      test: /\.css$/,
      include: /styles/,
      loaders: [
        { loader: 'file-loader', options: { outputPath: 'public/' } },
        'extract-loader',
        'css-loader'
      ]
    }]
  },

  devServer: {
    port: 8080,
    overlay: true,
    historyApiFallback: true
  }
};
