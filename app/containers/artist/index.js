import React from 'react'
import Relay from 'react-relay'

export class Artist extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.artist.name}</h1>
        <table>
          <thead>
            <tr>
              <th>Artworks</th>
              <th>Shows</th>
              <th>Articles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.artist.counts.artworks}</td>
              <td>{this.props.artist.counts.partner_shows}</td>
              <td>{this.props.artist.counts.articles}</td>
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
        counts {
          artworks,
          partner_shows
          articles
        }
      }
    `,
  }
})
