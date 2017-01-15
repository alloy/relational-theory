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
    rules: [
      { test: /\.json$/, loader: "json-loader" },
      {
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader", "ts-loader?logLevel=warn"],
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
    new webpack.optimize.CommonsChunkPlugin("commons.chunk"),
  ],
  resolve: {
    alias: {
      "react-native": "react-native-web/core",
    },
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  devtool: "#inline-source-map", // TODO: For production we should output a source-map file instead.
};
