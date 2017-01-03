import { storiesOf } from "@kadira/storybook"
import * as React from "react"
import * as Relay from "react-relay"
import StubContainer from "react-storybooks-relay-container"

import Header from "../header"

import { artsyNetworkLayer } from "../../../relay/config"
import { ArtistQueryConfig } from "../../../relay/root_queries"

storiesOf("Artist Header", module)
  .add("Relay : Artist - Leda Catunda", () => {
    Relay.injectNetworkLayer(artsyNetworkLayer())
    const artistRoute = new ArtistQueryConfig({ artistID: "leda-catunda" })
    return <Relay.RootContainer Component={Header} route={artistRoute} />
  })

  .add("For Stubbed Data", () => {
    const api = {
      artist: {
        birthday: "1999",
        counts: { follows: 12 },
        name: "Another Example",
        nationality: "OK",
      },
    }
    return <StubContainer Component={Header} props={api} />
  })
