// @flow

import * as React from 'react'
import { StyleSheet, View } from 'react-native-web'
import * as Relay from 'react-relay'
import ArtistHeader from '../../../components/artist/header'


interface Props {
  artist: any
}
interface State {
  following: boolean | null,
  followersCount: number,
 }

export class Artist extends React.Component<Props, State>  {

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
