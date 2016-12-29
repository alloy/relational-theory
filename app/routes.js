// @flow

import express from 'express'
import type { $Request, $Response, NextFunction } from 'express' // eslint-disable-line no-duplicate-imports

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Relay from 'react-relay' // eslint-disable-line no-unused-vars
import IsomorphicRelay from 'isomorphic-relay'

import { artsyRelayMiddleware } from './relay/config'
import { ArtistQueryConfig } from './relay/root_queries'
import Artist from './containers/react-native-web/artist'

const app = express.Router()

app.use(artsyRelayMiddleware)

app.get('/react-native-web/artist/:id', (req: $Request, res: $Response, next: NextFunction) => {
  // TODO We can use this to programatically add script tags and CSS links once we have more than just 1 JS file.
  // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName

  IsomorphicRelay.prepareData({
    Container: Artist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    // TODO What do we do with this stylesheet?
    // const stylesheet = ReactDOMServer.renderToString(ReactNative.StyleSheet.render())
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/bundle.js" defer></script>
        <script type="text/javascript">var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}</script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

export default app
