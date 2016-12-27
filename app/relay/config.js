import Relay from 'react-relay'

const metaphysicsURL = 'https://metaphysics-staging.artsy.net'

export default function artsyNetworkLayer() {
  return new Relay.DefaultNetworkLayer(metaphysicsURL, {
    headers: {
      // 'X-USER-ID': Emission.userID,
      // 'X-ACCESS-TOKEN': Emission.authenticationToken,
    },
  })
}
