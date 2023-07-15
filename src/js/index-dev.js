import "webpack-hot-middleware/client";
import { renderApp } from ".";

if (module.hot) {
  module.hot.accept("./index.js", function () {
    console.log("accepting updated index js module");
    renderApp();
  });
}
