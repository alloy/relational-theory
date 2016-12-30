import React from 'react'
import Relay from 'react-relay'
import { storiesOf } from '@kadira/storybook'
import Header from '../components/header'
import { ArtistQueryConfig } from '../../../relay/root_queries'
import { artsyNetworkLayer } from '../../../relay/config'

import StubContainer from 'react-storybooks-relay-container'

storiesOf('Artist Header', module)
  .add('Relay : Artist - Leda Catunda', () => {
    Relay.injectNetworkLayer(artsyNetworkLayer())
    const artistRoute = new ArtistQueryConfig({ artistID: 'leda-catunda' })
    return <Relay.RootContainer Component={Header} route={artistRoute}/>
  })

.add('For Stubbed Data', () => {
  const api = {
    artist: {
      name: 'Another Example',
      nationality: 'OK',
      birthday: '1999',
      counts: { follows: 12 },
    },
  }
  return <StubContainer Component={Header} props={api}/>
})

