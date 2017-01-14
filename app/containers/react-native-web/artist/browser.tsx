import * as React from "react"
import * as ReactDOM from "react-dom"

import IsomorphicRelay from "isomorphic-relay"

import { artsyRelayEnvironment } from "../../../relay/config"
import { ArtistQueryConfig } from "../../../relay/root_queries"

import Artist from "./index"

const rootElement = document.getElementById("root")

declare var window: any

const environment = artsyRelayEnvironment()
IsomorphicRelay.injectPreparedData(environment, window.ARTIST_PROPS)

IsomorphicRelay.prepareInitialRender({
  Container: Artist,
  queryConfig: new ArtistQueryConfig({ artistID: window.ARTIST_ID }),
  environment,
}).then(props => {
  ReactDOM.render(<IsomorphicRelay.Renderer {...props} />, rootElement)
})
