import * as React from "react"
import * as Relay from "react-relay"

import ArtistHeader from '../../../components/artist/header'
import Grid from './grid'

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
