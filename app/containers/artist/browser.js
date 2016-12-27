import React from 'react'
import ReactDOM from 'react-dom'

import Relay from 'react-relay'
import IsomorphicRelay from 'isomorphic-relay'

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

const metaphysicsURL = 'https://metaphysics-staging.artsy.net'

const environment = new Relay.Environment()
environment.injectNetworkLayer(new Relay.DefaultNetworkLayer(metaphysicsURL, {
  headers: {
    // 'X-USER-ID': Emission.userID,
    // 'X-ACCESS-TOKEN': Emission.authenticationToken,
  },
}))

IsomorphicRelay.injectPreparedData(environment, window.ARTIST_PROPS)

const rootElement = document.getElementById('root')

function render() {
  const Artist = require('./index').default

  const rootContainerProps = {
    Container: Artist,
    queryConfig: new ArtistRoute({ artistID: window.ARTIST_ID }),
  }

  IsomorphicRelay.prepareInitialRender({ ...rootContainerProps, environment })
    .then(props => {
      ReactDOM.render(<IsomorphicRelay.Renderer {...props} />, rootElement)
    })
}

render()

if (module.hot) {
  module.hot.accept('./index', () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(rootElement)
      render()
    })
  })
}
