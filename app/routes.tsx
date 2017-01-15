import * as express from "express"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import * as Relay from "react-relay"

import IsomorphicRelay from "isomorphic-relay"

import { artsyRelayMiddleware } from "./relay/config"
import { ArtistQueryConfig } from "./relay/root_queries"

import PureReactArtist from "./containers/pure-react/artist"
import ReactInlineCSSArtist from "./containers/react-inline-css/artist"

import * as ReactNative from "react-native-web"
import ReactNativeWebArtist from "./containers/react-native-web/artist"

import { StyleSheetServer } from "aphrodite"
import ReactAphroditeArtist from "./containers/react-aphrodite/artist"

import { SheetsRegistry, SheetsRegistryProvider } from "react-jss"
import ReactJSSArtist from "./containers/react-jss/artist"

const app = express.Router()

app.use(artsyRelayMiddleware)

app.get("/", (req: any, res: any, next: any) => {
  res.send(`<html><body><ul>
  <li><a href="/pure-react/artist/banksy">pure-react</a></li>
  <li><a href="/react-inline-css/artist/banksy">react-inline-css</a></li>
  <li><a href="/react-aphrodite/artist/banksy">react-aphrodite</a></li>
  <li><a href="/react-native-web/artist/banksy">react-native-web</a></li>
  <li><a href="/react-jss/artist/banksy">react-jss</a></li>
  </ul></body></html>`)
})

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
app.get("/pure-react/artist/:id", (req: any, res: any, next: any) => {
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

app.get("/pure-react/style.css", (req: any, res: any, next: any) => {
  res.sendFile("./containers/pure-react/artist/style.css", { root: __dirname })
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
app.get("/react-inline-css/artist/:id", (req: any, res: any, next: any) => {
  IsomorphicRelay.prepareData({
    Container: ReactInlineCSSArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/react-inline-css.js" defer></script>
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
app.get("/react-aphrodite/artist/:id", (req: any, res: any, next: any) => {
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
 * REACT with JSS for inline CSS
 *
 * [x] Server-side rendering
 * [x] Client-side rendering
 * [ ] Client-side rehydration: this is the only thing I can find on the topic
 *     https://github.com/cssinjs/react-jss/issues/2
 * [x] No limitation in CSS possibilities: at least I believe media queries and keyframe animations are native?
 * [ ] Styling cachable by client
 * [x] Small data size: regular class based styling is added to a style tag
 * [x] Vendor prefixes: tooling should exist, but which to use for an isomorphic app wasn’t immediately clear.
 * [x] Code+Style locality
 * [-] Portability of mobile app code: uses `className` attribute rather than `style`
 */
app.get("/react-jss/artist/:id", (req: any, res: any, next: any) => {
  IsomorphicRelay.prepareData({
    Container: ReactJSSArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const sheets = new SheetsRegistry()
    const html = ReactDOMServer.renderToString(
      <SheetsRegistryProvider registry={sheets}>
        <IsomorphicRelay.Renderer {...props} />)
      </SheetsRegistryProvider>
    )
    res.send(`
      <html>
      <head>
        <style type="text/css">${sheets.toString()}</style>
        <script type="text/javascript" src="/assets/react-jss.js" defer></script>
        <script type="text/javascript">
          var ARTIST_ID = "${req.params.id}";
          var ARTIST_PROPS = ${JSON.stringify(data)};
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
 * However, this seems like it should be easily fixable. In addition, there’s a PR up that makes it possible to switch
 * out the default styling engine with JSS https://github.com/necolas/react-native-web/pull/304.
 */
app.get("/react-native-web/artist/:id", (req: any, res: any, next: any) => {
  IsomorphicRelay.prepareData({
    Container: ReactNativeWebArtist,
    queryConfig: new ArtistQueryConfig({ artistID: req.params.id }),
  }, res.locals.networkLayer).then(({ data, props }) => {
    const content = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />)
    const StyleSheet: any = ReactNative.StyleSheet
    const styleElement = StyleSheet.renderToString()
    res.send(`
      <html>
      <head>
        <script type="text/javascript" src="/assets/react-native-web.js" defer></script>
        <script type="text/javascript">
        var ARTIST_ID = "${req.params.id}"; var ARTIST_PROPS = ${JSON.stringify(data)}
        </script>
        ${styleElement}
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      </html>
    `)
  }).catch(next)
})

export default app
