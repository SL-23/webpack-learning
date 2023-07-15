const common = require("./webpack.common.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");
const glob = require("glob");

module.exports = merge(common, {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].[contenthash:12].js",
    publicPath: "/static/",
  },
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      // keep existing minimizer!!! otherwise will not minimize js
      `...`,
      new CssMinimizerPlugin({
        // this is passed to cssnano
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      maxSize: Infinity,
      minSize: 2000,
      cacheGroups: {
        jquery: {
          test: /[\\/]node_modules[\\/]jquery[\\/]/,
          name: "jquery",
          // give them higher priority, so that it has higher priority than node_modules
          priority: 2,
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
          name: "lodash-es",
          priority: 2,
        },
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          name: "node_modules",
          chunks: "initial",
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "async",
          name(module, chunks) {
            return chunks.map((chunk) => chunk.name).join("-");
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                // make the class name unreadable
                localIdentName: "[hash:base64]",
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        // order matters in this array!!!
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // hash content with 12 chars
          filename: "./images/[name].[contenthash:12][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:12].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
        nodir: true,
      }),
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css)$/,
    }),
  ],
});
