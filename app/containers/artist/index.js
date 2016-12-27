import React from 'react'
import Relay from 'react-relay'

class Artist extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  // }

  render() {
    return (
      <div>
        <h1>{this.props.artist.name}</h1>
        <table>
          <thead>
            <tr>
              <th>Artworks Count</th>
              <th>Shows Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.artist.counts.artworks}</td>
              <td>{this.props.artist.counts.partner_shows}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Relay.createContainer(Artist, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        name
        has_metadata
        counts {
          artworks,
          partner_shows,
          related_artists,
          articles
        }
      }
    `,
  }
})
