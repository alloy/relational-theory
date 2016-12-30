import React from 'react'
import Relay from 'react-relay'

export class Artwork extends React.Component {
  render() {
    return (
      <div className='artwork'>
        <img src={this.props.artwork.image.url} />
        <h3>{this.props.artwork.artists.map(artist => artist.name).join(', ')}</h3>
        <h4>{this.props.artwork.title}</h4>
      </div>
    )
  }
}

export default Relay.createContainer(Artwork, {
  fragments: {
    artwork: () => Relay.QL`
      fragment on Artwork {
        title
        artists {
          name
        }
        image {
          url
        }
      }
    `,
  },
})
