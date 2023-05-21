const path = require("path");

const config = {
  // default get index.js
  // absolute path!!!!
  entry: "./src/js",
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
};

module.exports = config;
