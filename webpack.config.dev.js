var path = require('path');
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    alias: { vue: 'vue/dist/vue.js' },
  },
  entry: [
    './src/main.js',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ],
  output: {
    path:  path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.vue/, exclude: /node_modules/, loader: 'vue-loader' },
    ],
    noParse: [new RegExp('node_modules/localforage/dist/localforage.js')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
