'use strict'

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')()

module.exports = {
  entry: [
    './src/server/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '..', 'www'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals],
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    __filename: 'mock',
    __dirname: 'mock',
    setImmediate: true
  },
  watch: false,
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'node-style-loader', 'css-loader?modules', 'postcss-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(html)$/),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
