/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './app/containers/artist/browser',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
    ],
  },
}
