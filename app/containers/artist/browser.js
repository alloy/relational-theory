import React from "react"
import ReactDOM from "react-dom"

import Relay from "react-relay"
import IsomorphicRelay from "isomorphic-relay"

import artsyNetworkLayer from "../../relay/config"
import { ArtistQueryConfig } from "../../relay/root_queries"

const rootElement = document.getElementById("root")

const environment = new Relay.Environment()
environment.injectNetworkLayer(artsyNetworkLayer())
IsomorphicRelay.injectPreparedData(environment, window.ARTIST_PROPS)

function render() {
  const Artist = require("./index").default
  IsomorphicRelay.prepareInitialRender({
    Container: Artist,
    queryConfig: new ArtistQueryConfig({ artistID: window.ARTIST_ID }),
    environment,
  }).then(props => {
    ReactDOM.render(<IsomorphicRelay.Renderer {...props} />, rootElement)
  })
}

render()

if (module.hot) {
  module.hot.accept("./index", () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(rootElement)
      render()
    })
  })
}
