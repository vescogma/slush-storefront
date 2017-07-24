const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MD5HashPlugin = require('webpack-md5-hash');
const HTMLPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const path = require('path');

const PROD = 'production';
const TEST = 'test';
const DEV = 'development';
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || (process.env.NODE_ENV = DEV);

const indexHtml = path.resolve(__dirname, 'index.html');
const outDir = path.resolve('bundle');

module.exports = {
  entry: {
    'storefront': './src/index'
  },

  devtool: 'source-map',

  output: {
    filename: `public/[name]-[hash].js`,
    sourceMapFilename: `public/[name]-[hash].map.js`,
    path: outDir,
  },

  resolve: {
    // mainFields: ['browser', 'module:esnext', 'module', 'main']
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MD5HashPlugin(),
    new DefinePlugin({
      'process.env': {
        ENV: `'${ENV}'`,
        NODE_ENV: `'${ENV}'`
      }
    }),
    new HTMLPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency',
      metadata: {
        baseUrl: ENV === PROD ? '/demo/' : '/',
      },
      minify: ENV === PROD ? { removeComments: true, collapseWhitespace: true } : undefined
    }),

  ],

  module: {
    rules: [{
      resource: [
        { test: /\.js$/, exclude: [/node_modules/] }
      ],
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
        /node_modules/,
        /components/
      ],
      use: [
        'to-string-loader',
        { loader: 'css-loader', options: { minimize: ENV === PROD } }
      ]
    }, {
      test: /\.css$/,
      include: /style/,
      loaders: [
        { loader: 'file-loader', options: { outputPath: 'public/' } },
        'extract-loader',
        { loader: 'css-loader', options: { minimize: ENV === PROD } }
      ]
    }]
  },

  devServer: {
    port: 8080,
    overlay: true,
    historyApiFallback: true
  }
};
