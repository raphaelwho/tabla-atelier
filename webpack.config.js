var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `./client/index.jsx`,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client/dist/")
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
    ],
  },
};
