/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'pure-react': [
      './app/containers/pure-react/artist/browser',
      'webpack-hot-middleware/client',
    ],
    'react-inline-css': [
      './app/containers/react-inline-css/artist/browser',
      'webpack-hot-middleware/client',
    ],
    'react-aphrodite': [
      './app/containers/react-aphrodite/artist/browser',
      'webpack-hot-middleware/client',
    ],
    'react-native-web': [
      './app/containers/react-native-web/artist/browser',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js',
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
  resolve: {
    alias: {
      'react-native': 'react-native-web/core',
    },
  },
}
