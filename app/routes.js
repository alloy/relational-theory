import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Artist from './containers/artist'

const app = express.Router()

const ARTIST_PROPS = {
  items: [
    'Item 1',
    'Item 2',
  ],
}

app.get('/artist/:id', (req, res) => {
  // TODO We can use this to programatically add script tags and CSS links once we have more than just 1 JS file.
  // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName

  res.send(`
    <html>
    <head>
      <script type="text/javascript" src="/assets/bundle.js" defer></script>
      <script type="text/javascript">var ARTIST_PROPS = ${JSON.stringify(ARTIST_PROPS)}</script>
    </head>
    <body>
      <div id="content">${ReactDOMServer.renderToString(<Artist {...ARTIST_PROPS} />)}</div>
    </body>
    </html>
  `)
})

export default app
