import express from 'express'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Relay from 'react-relay'
import IsomorphicRelay from 'isomorphic-relay'

import Artist from './containers/artist'

const app = express.Router()

const metaphysicsURL = 'https://metaphysics-staging.artsy.net'

app.use((req, res, next) => {
  res.locals.networkLayer = new Relay.DefaultNetworkLayer(metaphysicsURL, {
    headers: {
      // 'X-USER-ID': Emission.userID,
      // 'X-ACCESS-TOKEN': Emission.authenticationToken,
    },
  })
  next()
})

class ArtistRoute extends Relay.Route {
  static queries = {
    artist: (component, params) => Relay.QL`
      query {
        artist(id: $artistID) {
          ${component.getFragment('artist', params)}
        }
      }
    `,
  };

  static paramDefinitions = {
    artistID: { required: true },
  };

  static routeName = 'ArtistRoute';
}

app.get('/artist/:id', (req, res, next) => {
  // TODO We can use this to programatically add script tags and CSS links once we have more than just 1 JS file.
  // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName


  const rootContainerProps = {
    Container: Artist,
    queryConfig: new ArtistRoute({ artistID: req.params.id }),
  }

  IsomorphicRelay.prepareData(rootContainerProps, res.locals.networkLayer)
    .then(({ data, props }) => {
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
    })
    .catch(next)
})

export default app
