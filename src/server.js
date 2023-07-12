const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "dev") {
  console.log("Dev mode");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const configeration = require("../webpack/webpack.dev.config");
  const webpack = require("webpack");
  const webpackCompiler = webpack(configeration);
  app.use(
    webpackDevMiddleware(webpackCompiler, configeration.devServer.devMiddleware)
  );
}

app.get("/", function (req, res) {
  const absolutePathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  res.sendFile(absolutePathToHtmlFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, function () {
  console.log("Application is running on localhost:3000");
});
