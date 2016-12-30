// @flow

import express from 'express'
import type { $Request, $Response, NextFunction } from 'express' // eslint-disable-line no-duplicate-imports

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Relay from 'react-relay' // eslint-disable-line no-unused-vars
import IsomorphicRelay from 'isomorphic-relay'

import { artsyRelayMiddleware } from './relay/config'
import { ArtistQueryConfig } from './relay/root_queries'

import ReactNativeWebArtist from './containers/react-native-web/artist'
import PureReactArtist from './containers/pure-react/artist'
import ReactInlineCSSArtist from './containers/react-inline-css/artist'

import { StyleSheetServer } from 'aphrodite'
import ReactAphroditeArtist from './containers/react-aphrodite/artist'

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
app.get('/pure-react/artist/:id', (req: $Request, res: $Response, next: NextFunction) => {
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
        <script type="text/javascript">var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}</script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

app.get('/pure-react/style.css', (req: $Request, res: $Response, next: NextFunction) => {
  res.sendFile('./containers/pure-react/artist/style.css', { root: __dirname })
})

/*
 * REACT with builtin inline CSS support
 *
 * [x] Server-side rendering
 * [x] Client-side rendering
 * [x] Client-side rehydration
 * [ ] No limitation in CSS possibilities: e.g. keyframe animation and media queries don’t work inline
 * [ ] Styling cachable by client
 * [ ] Small data size: inline styles are repetitive and thus add byte size linearly
 * [-] Vendor prefixes: tooling should exist, but which to use for an isomorphic app wasn’t immediately clear.
 * [x] Code+Style locality
 * [-] Portability of mobile app code: no `StyleSheet` API and no: `<element style={[style1, style2]} />`
 */
app.get('/react-inline-css/artist/:id', (req: $Request, res: $Response, next: NextFunction) => {
  IsomorphicRelay.prepareData({
    Container: ReactInlineCSSArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/react-inline-css.js" defer></script>
        <script type="text/javascript">var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}</script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

/*
 * REACT with aphrodite for inline CSS
 *
 * [x] Server-side rendering
 * [x] Client-side rendering
 * [x] Client-side rehydration
 * [x] No limitation in CSS possibilities: at least I believe media queries and keyframe animations are native?
 * [ ] Styling cachable by client
 * [x] Small data size: regular class based styling is added to a style tag
 * [x] Vendor prefixes: tooling should exist, but which to use for an isomorphic app wasn’t immediately clear.
 * [x] Code+Style locality
 * [-] Portability of mobile app code: uses `className` attribute rather than `style`
 */
app.get('/react-aphrodite/artist/:id', (req: $Request, res: $Response, next: NextFunction) => {
  IsomorphicRelay.prepareData({
    Container: ReactAphroditeArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const { html, css } = StyleSheetServer.renderStatic(() => {
      return ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    })
    res.send(`
      <html>
      <head>
        <style data-aphrodite>${css.content}</style>
        <script type="text/javascript" src="/assets/react-aphrodite.js" defer></script>
        <script type="text/javascript">
          var ARTIST_ID = "${req.params.id}";
          var ARTIST_PROPS = ${JSON.stringify(data)};
          var STYLE_SHEET = ${JSON.stringify(css.renderedClassNames)};
        </script>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

/*
 * ReactNativeWeb
 *
 * [x] Server-side rendering
 * [x] Client-side rendering
 * [ ] Client-side rehydration
 * [ ] No limitation in CSS possibilities
 * [ ] CSS separately cachable
 * [x] Portability of mobile app code
 *
 * It doesn’t look like ReactNativeWeb supports server-side-rendering + client-side rehydration out-of-the-box. The
 * styles generated by the two sides differ from each other. (I suppose it’s agnostic vs vendor specifc CSS prefixes?)
 *
 *   Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you
 *   are using server rendering and the markup generated on the server was not what the client was expecting. React
 *   injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead,
 *   figure out why the markup being generated is different on the client or server:
 *   (client) <div style="-webkit-align-items:stretch;
 *   (server) <div style="-webkit-flex-shrink:0;-ms-fl
 */
app.get('/react-native-web/artist/:id', (req: $Request, res: $Response, next: NextFunction) => {
  IsomorphicRelay.prepareData({
    Container: ReactNativeWebArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    // TODO What do we do with this stylesheet?
    // const stylesheet = ReactDOMServer.renderToString(ReactNative.StyleSheet.render())
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/react-native-web.js" defer></script>
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
