import express from "express"

import React from "react"
import ReactDOMServer from "react-dom/server"

import Relay from "react-relay"
import IsomorphicRelay from "isomorphic-relay"

import artsyNetworkLayer from "./relay/config"
import { ArtistQueryConfig } from "./relay/root_queries"
import Artist from "./containers/artist"

const app = express.Router()

app.use((req, res, next) => {
  res.locals.networkLayer = artsyNetworkLayer()
  next()
})

app.get("/artist/:id", (req, res, next) => {
  // TODO We can use this to programatically add script tags and CSS links once we have more than just 1 JS file.
  // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName

  IsomorphicRelay.prepareData({
    Container: Artist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/bundle.js" defer></script>
        <script type="text/javascript">var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}</script>
      </head>
      <body>
        <div id="root">${ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

export default app
