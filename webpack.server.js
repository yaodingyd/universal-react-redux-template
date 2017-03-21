'use strict'

const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

let nodeModules = []
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  entry: [
    './src/server/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'server.js'
  },
  target: 'node',
  externals: nodeModules,
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
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_module/,
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
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|html)$/),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
