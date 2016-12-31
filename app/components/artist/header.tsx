"use strict"

import React from "react"
import Relay from "react-relay"

interface Props {
  artist: any
}
interface State {
      following: boolean | null,
    followersCount: number,
 }

class Header extends React.Component<Props, State> {

  static propTypes: Object = {
    artist: React.PropTypes.shape({
      birthday: React.PropTypes.string,
      counts: React.PropTypes.shape({
        follows: React.PropTypes.number,
      }),
      name: React.PropTypes.string,
      nationality: React.PropTypes.string,
    }),
  }

  constructor(props: any) {
    super(props)
    this.state = { following: null, followersCount: props.artist.counts.follows }
  }

  render() {

    const artist = this.props.artist
    return (
      <div>
        <h1> {artist.name} </h1>
        {this.renderByline()}
        {this.renderFollowersCount()}
      </div>
    )
  }

  renderFollowersCount() {
    const count = this.state.followersCount
    const followerString = count + (count === 1 ? " Follower" : " Followers")
    return (
      <i> {followerString} </i>
    )
  }

  renderByline() {
    const artist = this.props.artist
    const bylineRequired = (artist.nationality || artist.birthday)
    if (bylineRequired) {
      return (
        <div>
          <i> {this.descriptiveString()} </i>
        </div>
      )
    } else {
      return null
    }
  }

  descriptiveString() {
    const artist = this.props.artist
    const descriptiveString = (artist.nationality || "") + this.birthdayString()
    return descriptiveString
  }

  birthdayString() {
    const birthday = this.props.artist.birthday
    if (!birthday) { return "" }

    const leadingSubstring = this.props.artist.nationality ? ", b." : ""

    if (birthday.includes("born")) {
      return birthday.replace("born", leadingSubstring)
    } else if (birthday.includes("Est.") || birthday.includes("Founded")) {
      return " " + birthday
    }

    return leadingSubstring + " " + birthday
  }
}

// TODO: what's up with this?
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
  },
})
