'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'whatwg-fetch',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  watch: false,
  devServer: {
    inline: true,
    hot: true,
    contentBase: './dist',
    stats: {
      chunks: false,
      children: false,
      color: true
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
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
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader?modules', 'postcss-loader' ]
      }
    ]
  }
}
