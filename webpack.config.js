/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "pure-react": [
      "./app/containers/pure-react/artist/browser",
      "webpack-hot-middleware/client",
    ],
  },
  output: {
    path: path.join(__dirname, "assets"),
    filename: "[name].js",
    publicPath: "/assets",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
        {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "/Users/orta/dev/js/apps/relational-theory/webpack", "babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      "react-native": "react-native-web/core",
    },
  },
};
