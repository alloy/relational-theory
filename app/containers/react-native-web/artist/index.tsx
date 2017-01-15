import * as React from "react"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native-web"
import * as Relay from "react-relay"

import ArtworksGrid from "./grid"
import ArtistHeader from "./header"
import SerifText from "./text/serif"

import GQL from "../../../gql"

// tslint:disable-next-line
const colors = require("../../../../data/colors.json")

export const Artist = ({ artist }: { artist: GQL.ArtistType }) => (
  <View style={styles.appContainer}>
    <ArtistHeader artist={artist} />
    <hr />
    <View>
      <SerifText style={styles.heading}>
        <SerifText style={styles.text}>Works for Sale </SerifText>
        <SerifText style={[styles.text, styles.count]}>({artist.counts.for_sale_artworks})</SerifText>
      </SerifText>
      <ArtworksGrid
        artworks={artist.artworks}
        queryState={{ availability: "IS_FOR_SALE" }}
        queryForPage={resolveQuery(artist._id)}
        // tslint:disable-next-line
        onComplete={() => console.log("Done paging!")}
        queryArtworksKeypath="artist.artworks" />
    </View>
  </View>
)

const resolveQuery = (artistID: string) => {
  return (component: any, page: number, state: any): string => {
    // The page + 1 is to take into account the fact that we _start_ with results already
    const grid: any = ArtworksGrid
    return grid.artworksQuery(artistID, state.availability, component.state.page + 1)
  }
}

interface Styles {
  appContainer: ViewStyle,
  heading: TextStyle,
  text: TextStyle,
  count: TextStyle,
}

const styles = StyleSheet.create<Styles>({
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
  count: {
    color: colors["gray-semibold"],
  },
  heading: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
})

export default Relay.createContainer(Artist, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        _id
        id
        counts {
          for_sale_artworks
        }
        ${ArtistHeader.getFragment("artist")}
        artworks(sort: partner_updated_at_desc, filter: IS_FOR_SALE, size: 10) {
          ${ArtworksGrid.getFragment("artworks")}
        }
      }
    `,
  },
})
