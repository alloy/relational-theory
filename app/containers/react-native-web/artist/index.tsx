import * as React from "react"
import { StyleSheet, View } from "react-native-web"
import * as Relay from "react-relay"
import ArtistHeader from "./header"

export const Artist = ({ artist }) => (
  <View style={styles.appContainer}>
    <ArtistHeader artist={artist} />
    <hr />
  </View>
)

const styles = StyleSheet.create({
  /**
   * Ensure that the application covers the whole screen.
   */
  appContainer: {
    bottom: 0,
    left: 40,
    position: "absolute",
    right: 40,
    top: 0,
  },
})

export default Relay.createContainer(Artist, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        _id
        id
        ${ArtistHeader.getFragment("artist")}
      }
    `,
  },
})
