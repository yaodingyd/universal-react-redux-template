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
  mode: 'development',
  externals: [nodeExternals],
  resolve: {
    extensions: ['.js', 'css'],
    alias: {
      'client': path.join(__dirname, '..', 'src/client'),
      'server': path.join(__dirname, '..', 'src/server'),
      '@': path.join(__dirname, '..', 'src/client')
    }
  },
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   loader: 'standard-loader',
      //   exclude: /node_modules/,
      //   enforce: 'pre',
      //   options: {
      //     parser: 'babel-eslint'
      //   }
      // },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [ 'node-style-loader', 'css-loader?modules'/*, 'postcss-loader' */]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(html)$/),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
