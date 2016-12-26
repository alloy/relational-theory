/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './app/containers/artist/browser',
    // 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
