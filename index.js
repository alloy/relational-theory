/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

// import express from "express";
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(express.static("public"));
} else {
  app.use(morgan("dev"));

  // Long symbolicated stack traces
  require("longjohn");

  const webpack = require("webpack");
  const config = require("./webpack.config");
  const compiler = webpack(config);

  // Dynamically host assets to browser.
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    serverSideRender: true,
  }));

  // Allow client to be notified of changes to sources.
  app.use(require("webpack-hot-middleware")(compiler));

  // Watch for FS changes in ./app and clear cached modules when a change occurs,
  // thus effectively reloading the file on a subsequent request.
  const appPath = path.join(__dirname, "app");
  const watcher = require("chokidar").watch(appPath);
  watcher.on("ready", function () {
    // TODO See if this can be optimsed to reload less files.
    //      Basically need to know dependency graph of modules, maybe flow can help?
    watcher.on("all", function () {
      // console.log(`Clearing module cache in: ${appPath}`)
      Object.keys(require.cache).forEach(function (id) {
        if (id.startsWith(appPath)) {
          delete require.cache[id];
        }
      });
    });
  });

  // In case of an uncaught exception show it to the user and proceed, rather than exiting the process.
  // NOTE: This is a bad thing when it comes to concurrency, basically you can’t have 2 requests at the same time.
  let currentResponse = null;
  app.use(function (req, res, next) {
    // if (currentResponse) {
    //   console.error("No concurrent requests may be made, only 1 at a time.");
    //   process.abort();
    // }
    currentResponse = res;
    res.on("finish", () => {
      currentResponse = null;
    });
    next();
  });
  process.on("uncaughtException", (error) => {
    if (currentResponse) {
      currentResponse.status(500).send(`<html><body><pre>${error.stack}</pre></body></html>`);
      currentResponse = null;
    } else {
      console.error(error);
      process.abort();
    }
  });
}

// Dynamically load app routes so that they can be reloaded in development.
app.use(function (req, res, next) {
  require("./app/routes").default(req, res, next);
});

app.listen(3000, () => {
  console.log("✨ Opened on http://localhost:3000"); // tslint:disable-line
});
