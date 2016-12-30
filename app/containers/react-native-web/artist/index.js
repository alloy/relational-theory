// @flow

import React from 'react'
import { View, StyleSheet } from 'react-native'
import Relay from 'react-relay'
import ArtistHeader from '../../../components/artist/header'
import type { ArtistItem } from '../../../../data/graphql-export.flow'

export class Artist extends React.Component {
  props: { artist: ArtistItem }

  render() {
    return (
      <View style={[{ backgroundColor: 'red' }, styles.appContainer]}>
        <ArtistHeader artist={this.props.artist}/>
        <hr/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  /**
   * Ensure that the application covers the whole screen.
   */
  appContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
})

export default Relay.createContainer(Artist, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        _id
        id
        ${ArtistHeader.getFragment('artist')}
      }
    `,
  },
})
