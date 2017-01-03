const path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, "../")
        loaders: ["style", "css", "sass"],
        test: /.scss$/,
      },
    ],
  },
};
