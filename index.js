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
      Object.keys(require.cache).forEach(function(id: string) {
        if (id.startsWith(appPath)) {
          delete require.cache[id]
        }
      })
    })
  })
}

// Dynamically load app routes so that they can be reloaded in development.
app.use(function(req: any, res: any, next: any) {
  require('./app/routes').default(req, res, next)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
