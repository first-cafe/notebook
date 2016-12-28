var path = require('path');
var webpack = require('webpack');
var HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
    alias: { vue: 'vue/dist/vue.js' },
  },
  entry: {
    app: './src/main.js',
    vendor: [
      'vue',
      'vue-router',
    ],
  },
  output: {
    path: './dist',
    publicPath: '',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.vue/, exclude: /node_modules/, loader: 'vue-loader' },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: 'src/index.template.html'
    })
  ],
};
