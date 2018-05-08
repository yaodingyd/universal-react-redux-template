'use strict'

const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', 'css'],
    alias: {
      '@': path.join(__dirname, '..', 'src/client')
    }
  },
  watch: true,
  mode: 'development',
  devServer: {
    inline: true,
    hot: true,
    contentBase: './www',
    stats: 'errors-only'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './www/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   loader: 'standard-loader',
      //   exclude: /node_module/,
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
      // use css module with global css
      // https://github.com/css-modules/css-modules/pull/65#issuecomment-354712147
      // https://github.com/gajus/babel-plugin-react-css-modules
      {
        test: /\.css$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          loader: [ 'style-loader', 'css-loader?', 'postcss-loader' ]
        },{
          loader: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'postcss-loader' ]
        }]
      }
    ]
  }
}
