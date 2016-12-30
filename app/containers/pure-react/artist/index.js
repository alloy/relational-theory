import React from 'react'
import Relay from 'react-relay'

import Grid from './grid'
import ArtistHeader from '../../../components/artist/header'

export class Artist extends React.Component {
  render() {
    return (
      <div>
        <ArtistHeader artist={this.props.artist} />
        <hr />
        <Grid artworks={this.props.artist.artworks} />
      </div>
    )
  }
}

export default Relay.createContainer(Artist, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        name
        counts {
          artworks,
          partner_shows
          articles
        }
        artworks(size: 30) {
          ${Grid.getFragment('artworks')}
        }
        ${ArtistHeader.getFragment('artist')}
      }
    `,
  },
})
