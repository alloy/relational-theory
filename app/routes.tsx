

import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"
import Relay from "react-relay" // eslint-disable-line no-unused-vars

import IsomorphicRelay from "isomorphic-relay"

import { artsyRelayMiddleware } from "./relay/config"
import { ArtistQueryConfig } from "./relay/root_queries"

// import ReactNativeWebArtist from './containers/react-native-web/artist'
import PureReactArtist from "./containers/pure-react/artist"
// import ReactInlineCSSArtist from './containers/react-inline-css/artist'

import { StyleSheetServer } from "aphrodite"
// import ReactAphroditeArtist from './containers/react-aphrodite/artist'

const app = express.Router()

app.use(artsyRelayMiddleware)

/*
 * PURE REACT/CSS
 *
 * [x] Server-side rendering
 * [x] Client-side rendering
 * [x] Client-side rehydration
 * [x] No limitation in CSS possibilities
 * [x] Styling cachable by client
 * [x] Small data size
 * [x] Vendor prefixes: possible with tooling such as PostCSS (autoprefixer)
 * [ ] Code+Style locality
 * [ ] Portability of mobile app code
 */
app.get("/pure-react/artist/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  IsomorphicRelay.prepareData({
    Container: PureReactArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    res.send(`
      <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/pure-react/style.css" />
        <script type="text/javascript" src="/assets/pure-react.js" defer></script>
        <script type="text/javascript">
          var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}
        </script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

// app.get('/pure-react/style.css',  (req: express.Request, res: express.Response, next: express.NextFunction) => {
//   res.sendFile('./containers/pure-react/artist/style.css', { root: __dirname })
// })

export default app
