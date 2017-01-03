import IsomorphicRelay from "isomorphic-relay"
import React from "react"
import ReactDOM from "react-dom"

import { StyleSheet } from "aphrodite"

import { artsyRelayEnvironment } from "../../../relay/config"
import { ArtistQueryConfig } from "../../../relay/root_queries"

import Artist from "./index"

declare var document: any
declare var window: any

StyleSheet.rehydrate(window.STYLE_SHEET)

const rootElement = document.getElementById("root")

const environment = artsyRelayEnvironment()
IsomorphicRelay.injectPreparedData(environment, window.ARTIST_PROPS)

IsomorphicRelay.prepareInitialRender({
  Container: Artist,
  queryConfig: new ArtistQueryConfig({ artistID: window.ARTIST_ID }),
  environment,
}).then(props => {
  ReactDOM.render(<IsomorphicRelay.Renderer {...props} />, rootElement)
})
