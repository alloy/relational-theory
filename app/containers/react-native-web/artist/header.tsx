import * as React from "react"
import * as Relay from "react-relay"
import { FlexAlignType, StyleSheet, Text, TextStyle, View, ViewStyle, Dimensions } from "react-native-web"

// import Events from '../../native_modules/events'

// import colors from "../../../../data/colors"
const colors = require("../../../../data/colors.json")

import GQL from '../../../gql'

import Headline from './text/headline'
import InvertedButton from './inverted_button'
import SerifText from './text/serif'

// const isPad = Dimensions.get('window').width > 700
const isPad = true

interface Props {
  artist: GQL.ArtistType,
}

interface State {
  following: boolean | null,
  followersCount: number,
}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { following: true, followersCount: props.artist.counts.follows }
  }

  // componentDidMount() {
  //     ARTemporaryAPIModule.followStatusForArtist(this.props.artist._id, (error, following) => {
  //         this.setState({ following: following })
  //     })
  // }

  handleFollowChange = () => {
    const newFollowersCount: number = this.state.following ? (this.state.followersCount - 1) : (this.state.followersCount + 1)
    // ARTemporaryAPIModule.setFollowArtistStatus(!this.state.following, this.props.artist._id, (error, following) => {
    //     if (error) {
    //         console.error(error)
    //     } else {
    //         Events.postEvent(this, {
    //             name: following ? 'Follow artist' : 'Unfollow artist',
    //             artist_id: this.props.artist._id,
    //             artist_slug: this.props.artist.id,
    //             // TODO At some point, this component might be on other screens.
    //             source_screen: 'artist page',
    //         })
    //     }
    //     this.setState({ following: following, followersCount: newFollowersCount })
    // })
    this.setState({ following: !this.state.following, followersCount: newFollowersCount })
  }

  render() {
    const artist = this.props.artist
    return (
      <View style={{ paddingTop: 20 }}>
        <Headline style={[styles.base, styles.headline]}>
          {artist.name}
        </Headline>
        {this.renderByline()}
        {this.renderFollowersCount()}
        {this.renderFollowButton()}
      </View>
    )
  }

  renderFollowButton() {
    if (this.state.following !== null) {
      return (
        <View style={styles.followButton}>
          <InvertedButton text={this.state.following ? 'Following' : 'Follow'}
            selected={this.state.following}
            onPress={this.handleFollowChange} />
        </View>
      )
    }
  }

  renderFollowersCount() {
    const count = this.state.followersCount
    const followerString = count + (count === 1 ? ' Follower' : ' Followers')
    return (
      <SerifText style={[styles.base, styles.followCount]}>
        {followerString}
      </SerifText>
    )
  }

  renderByline() {
    const artist = this.props.artist
    const bylineRequired = (artist.nationality || artist.birthday)
    if (bylineRequired) {
      return (
        <View>
          <SerifText style={styles.base}>
            {this.descriptiveString()}
          </SerifText>
        </View>
      )
    } else {
      return null
    }
  }

  descriptiveString() {
    const artist = this.props.artist
    const descriptiveString = (artist.nationality || '') + this.birthdayString()
    return descriptiveString
  }

  birthdayString() {
    const birthday = this.props.artist.birthday
    if (!birthday) { return '' }

    const leadingSubstring = this.props.artist.nationality ? ', b.' : ''

    if (birthday.includes('born')) {
      return birthday.replace('born', leadingSubstring)
    } else if (birthday.includes('Est.') || birthday.includes('Founded')) {
      return ' ' + birthday
    }

    return leadingSubstring + ' ' + birthday
  }
}

interface Styles {
  base: TextStyle,
  headline: TextStyle,
  followCount: TextStyle,
  followButton: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  base: {
    textAlign: "center",
  },
  headline: {
    fontSize: 14,
  },
  followCount: {
    color: colors['gray-semibold'],
    marginBottom: 30
  },
  followButton: {
    height: 40,
    width: isPad ? 330 : null,
    alignSelf: isPad ? "center" : null,
    marginLeft: 0,
    marginRight: 0,
  },
})

export default Relay.createContainer(Header as any, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        _id
        id
        name
        nationality
        birthday
        counts {
          follows
        }
      }
    `,
  }
})