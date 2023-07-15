const common = require("./webpack.common.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
  entry: "./src/js/index-dev.js",
  output: {
    filename: "bundle.js",
    publicPath: "/static/",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // CONFIG: https://www.npmjs.com/package/css-loader
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // make it readable in dev mode
                localIdentName: "[local]--[md4:hash:7]",
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        // order matters in this array!!!
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.*\.(png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "./images/[name].[contenthash:12][ext]",
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
