import * as React from "react"
import * as Relay from "react-relay"

interface Props {
  artwork: any
}
interface State {
}

export class Artwork extends React.Component<Props, State> {
  render() {
    return (
      <div className="artwork">
        <img src={this.props.artwork.image.url} />
        <h3>{this.props.artwork.artists.map((artist) => artist.name).join(", ")}</h3>
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
