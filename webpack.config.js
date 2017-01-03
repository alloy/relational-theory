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
    "react-aphrodite": [
      "./app/containers/react-aphrodite/artist/browser",
      "webpack-hot-middleware/client",
    ],
    "react-inline-css": [
      "./app/containers/react-inline-css/artist/browser",
      "webpack-hot-middleware/client",
    ],
    "react-jss": [
      "./app/containers/react-jss/artist/browser",
      "webpack-hot-middleware/client",
    ],
    "react-native-web": [
      "./app/containers/react-native-web/artist/browser",
      "webpack-hot-middleware/client",
    ],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader", "ts-loader"],
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "assets"),
    publicPath: "/assets",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      "react-native": "react-native-web/core",
    },
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
};
