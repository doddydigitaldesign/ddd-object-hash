var path = require("path");

module.exports = {
  target: "node",
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: "index.js",
    library: "objectToHash",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
