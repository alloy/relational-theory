import Relay from "react-relay"

const metaphysicsURL = "https://metaphysics-staging.artsy.net"

export function artsyNetworkLayer() {
  return new Relay.DefaultNetworkLayer(metaphysicsURL, {
    headers: {
      // 'X-USER-ID': Emission.userID,
      // 'X-ACCESS-TOKEN': Emission.authenticationToken,
    },
  })
}

/*
 * For the server.
 */
export function artsyRelayMiddleware(req, res, next) {
  res.locals.networkLayer = artsyNetworkLayer()
  next()
}

/*
 * For the client.
 */
export function artsyRelayEnvironment() {
  const env = new Relay.Environment()
  env.injectNetworkLayer(artsyNetworkLayer())
  return env
}
