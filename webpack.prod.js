'use strict'

var path = require('path')
var webpack = require('webpack')
var webpackSftpClient = require('webpack-sftp-client')

var config = require('./config')

// do not kill the process
// in the development mode
// let watch = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    '../static/js/bundle': './src/index.js',
    './dist/bundle': './src/index.js'
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
     'process.env.NODE_ENV': '"production"',
     '__DEV__': false
    }),
    new webpackSftpClient({
        port: '22',
        host: config.sftp.host,
        username: config.sftp.username,
        password: config.sftp.password,
        path: './dist/bundle.js',
        remotePath: './srv/production/pythontutor/tutorial/static/js/bundle.js'
    })
  ],
  resolve: {
    root: [path.resolve(__dirname, 'src'),
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
