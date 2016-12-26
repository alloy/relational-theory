/*
 * Changes to this file will not be automatically reloaded,
 * instead you will have to restart the process to do so.
 */

import express from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
  app.use(express.static('public'))
} else {
  app.use(morgan('dev'))

  const webpack = require('webpack')
  const config = require('./webpack.config')
  const compiler = webpack(config)

  // Dynamically host assets to browser.
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    serverSideRender: true,
    publicPath: config.output.publicPath,
  }))

  // Allow client to be notified of changes to sources.
  app.use(require('webpack-hot-middleware')(compiler))

  // Watch for FS changes in ./app and clear cached modules when a change occurs,
  // thus effectively reloading the file on a subsequent request.
  const appPath = path.join(__dirname, 'app')
  const watcher = require('chokidar').watch(appPath)
  watcher.on('ready', function() {
    // TODO See if this can be optimsed to reload less files.
    //      Basically need to know dependency graph of modules, maybe flow can help?
    watcher.on('all', function() {
      // console.log(`Clearing module cache in: ${appPath}`)
      Object.keys(require.cache).forEach(function(id) {
        if (id.startsWith(appPath)) {
          delete require.cache[id]
        }
      })
    })
  })

  // Do "hot-reloading" of react stuff on the server
  // Throw away the cached client modules and let them be re-required next time
  // compiler.plugin('done', function() {
  //   console.log("Clearing /client/ module cache from server");
  //   Object.keys(require.cache).forEach(function(id) {
  //     if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  //   });
  // });
}

// Dynamically load app routes so that they can be reloaded in development.
app.use(function(req, res, next) {
  require('./app/routes').default(req, res, next)
})

// TODO Don’t know what this is about yet.
//
// Anything else gets passed to the client app's server rendering
// app.get('*', function(req, res, next) {
//   require('./client/server-render')(req.path, function(err, page) {
//     if (err) return next(err);
//     res.send(page);
//   });
// });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
