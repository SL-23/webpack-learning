const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  // default get index.js
  // absolute path!!!!
  entry: "./src/js",
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

module.exports = config;
