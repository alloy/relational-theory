import React from 'react'
import Relay from 'react-relay'
import ArtistHeader from './components/header'

export class Artist extends React.Component {

  props: { artist: ArtistItem }
  render() {
    return (
      <div>
        <ArtistHeader artist={this.props.artist}/>
        <hr/>
      </div>
    )
  }
}

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
