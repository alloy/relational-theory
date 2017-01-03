import * as React from "react"
import * as Relay from "react-relay"
import injectSheet from 'react-jss'

interface Props {
  artwork: any
  sheet: any
}
interface State {
 }

export class Artwork extends React.Component<Props, State> {
  render() {
    const classes = this.props.sheet.classes
    return (
      <div className={classes.container}>
        <img className={classes.image} src={this.props.artwork.image.url} />
        <h3 className={[classes.heading, classes.artists].join(' ')}>{this.props.artwork.artists.map(artist => artist.name).join(', ')}</h3>
        <h4 className={[classes.heading, classes.title].join(' ')}>{this.props.artwork.title}</h4>
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

const styles = {
  container: {
    flex: 1,
    marginBottom: 20,
  },
  image: {
    width: '100%',
  },
  heading: {
    margin: '4px 0',
    color: 'rgb(102, 102, 102)',
    fontSize: 15,
  },
  artists: {
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
}

export default Relay.createContainer(injectSheet(styles)(Artwork), {
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
