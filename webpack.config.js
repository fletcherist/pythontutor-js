'use strict'

var path = require('path')
var webpack = require('webpack')

// do not kill the process
// in the development mode
// let watch = process.env.NODE_ENV === 'development'


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      ]
    }]
  }
};
