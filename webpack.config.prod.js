var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    alias: { vue: 'vue/dist/vue.js' },
  },
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.vue/, exclude: /node_modules/, loader: 'vue-loader' },
    ],
  },
};
