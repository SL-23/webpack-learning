const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const config = {
  // default get index.js
  // absolute path!!!!
  entry: "./src/js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    // clean: {
    //   // dry: true, // just tell you what will be done, not doing anything
    //   keep: /\.css/,
    // }, --> no need as clean webpack plug in doing same thing
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "images/motivational-pictures/**",
        },
      ],
    }),
  ],
};

module.exports = config;
