import * as React from "react"
import * as Relay from "react-relay"

import { css, StyleSheet } from "aphrodite/no-important"

interface Props {
  artwork: any
}
interface State {
}

export class Artwork extends React.Component<Props, State> {
  render() {
    const artists = this.props.artwork.artists.map(artist => artist.name).join(", ")
    return (
      <div className={css(styles.container)}>
        <img className={css(styles.image)} src={this.props.artwork.image.url} />
        <h3 className={css(styles.artists, styles.heading)}>{artists}</h3>
        <h4 className={css(styles.heading, styles.title)}>{this.props.artwork.title}</h4>
      </div>
    )
  }
}

// .grid .column .artwork {
//   flex: 1;
//   margin-bottom: 20px;
// }

// .artwork img {
//   width: 100%;
// }

// .artwork h3,h4 {
//   margin: 4px 0;
//   color: rgb(102, 102, 102);
//   font-size: 15px;
// }

// .artwork h3 {
//   font-style: normal;
//   font-weight: bold;
// }

// .artwork h4 {
//   font-style: italic;
//   font-weight: normal
// }

const styles = StyleSheet.create({
  artists: {
    fontStyle: "normal",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  heading: {
    color: "rgb(102, 102, 102)",
    fontSize: 15,
    margin: "4px 0",
  },
  image: {
    width: "100%",
  },
  title: {
    fontStyle: "italic",
    fontWeight: "normal",
  },
})

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
