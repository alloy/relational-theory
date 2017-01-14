// 1. Get first layout pass of grid view so we have a total width and calculate the column width (componentDidMount?).
// 2. Possibly do artwork column layout now, as we can do so based just on the aspect ratio, assuming the text height
//    won't be too different between artworks.
// 3. Get artwork heights by either:
//    - calculating the item size upfront with aspect ratio and a static height for the text labels.
//    - leting the artwork component do a layout pass and calculate its own height based on the column width.
// 4. Update height of grid to encompass all items.

import * as Relay from 'react-relay'
import * as React from 'react'
import { Dimensions, View, ViewStyle, ScrollView, StyleSheet } from "react-native-web"

import Artwork from './artwork'
// import Spinner from '../spinner'
const Spinner = ({ spinnerColor = null, style }) => <div></div>

import metaphysics from './metaphysics'
import GQL from '../../../gql'

import { get, isEqual } from 'lodash'

// const isPad = Dimensions.get('window').width > 700
const isPad = true

const PageSize = 10
const PageEndThreshold = 1000

/**
 * TODOs:
 * - currently all the code assumes column layout
 *   - do no invert aspect ratios in row layout
 * - deal with edge-cases when calculating in which section an artwork should go
 *   - see ARMasonryCollectionViewLayout for details on how to deal with last works sticking out
 *   - the calculation currently only takes into account the size of the image, not if e.g. the sale message is present
 */

interface Props {
  /** The direction for the grid, currently only 'column' is supported . */
  sectionDirection: string,

  /** The arity of the number of sections (e.g. columns) to show */
  sectionCount: number,

  /** The inset margin for the whole grid */
  sectionMargin: number,

  /** The per-item margin */
  itemMargin: number,

  /** All the artworks for the grid */
  artworks: GQL.ArtworkType[],

  /** A non-optional object for the request state.
   *  When this changes, it will reset the component.
   *  We recommend sending in your query params.
   *  This gets passed back to your request query below.
   * */
  queryState: any,

  /** A non-optional callback to generate the GraphQL query. */
  queryForPage: (component: InfiniteScrollArtworksGrid, page: number, queryState: any) => string,

  /** A callback that is called once all artworks have been queried. */
  onComplete?: () => void,

  /** When you get the results from the GraphQL, this is the keypath from
   * which the artworks can be found, applied via `_.get()`
   * */
  queryArtworksKeypath: string,
}

interface State {
  sectionDimension: number,
  artworks: GQL.ArtworkType[],
  page: number,
  completed: boolean,
  fetchingNextPage: boolean,
}

class InfiniteScrollArtworksGrid extends React.Component<Props, State> {
  _sentEndForContentLength: null | number;

  static defaultProps = {
    sectionDirection: 'column',
    sectionCount: isPad ? 3 : 2,
    sectionMargin: 20,
    itemMargin: 20,
  }

  constructor(props) {
    super(props)
    console.log(props.artworks)
    this.state = {
      sectionDimension: 0,
      artworks: this.props.artworks,
      page: this.props.artworks.length ? 1 : 0,
      completed: false,
      fetchingNextPage: false,
    }

    this._sentEndForContentLength = null
  }

  // Initial setup
  componentWillMount() {
    if (this.state.artworks.length === 0) {
      this.fetchNextPage()
    }
  }

  // Reset detection
  componentDidUpdate() {
    if (this.state.artworks.length === 0) {
      this.fetchNextPage()
    }
  }

  /** Download new Artworks, and update the internal state accordingly */
  fetchNextPage() {
    if (this.state.fetchingNextPage || this.state.completed) {
      return
    }

    const nextPage = this.state.page + 1
    const queryState = this.props.queryState
    const query = this.props.queryForPage(this, nextPage, queryState)

    metaphysics(query)
      .then((results) => {
        // this.debugLog(query, results, null)

        const artworks: GQL.ArtworkType[] = get(results, this.props.queryArtworksKeypath)
        if (artworks === undefined) { console.error('Your queryArtworksKeypath could be wrong in the infinite_scroll_grid') }
        const completed = artworks.length < PageSize
        if (completed && this.props.onComplete) {
          this.props.onComplete()
        }
        this.setState({
          page: nextPage,
          artworks: this.state.artworks.concat(artworks),
          completed: completed,
          fetchingNextPage: false,
        } as State) // TODO Required until this is merged: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/13155
      })
      .catch((error) => {
        this.setState({ fetchingNextPage: false } as State)
        // this.debugLog(query, null, error)
      })

    this.setState({ fetchingNextPage: true } as State)
  }

  /** A simplified version of the Relay debugging logs for infinite scrolls */
  // debugLog(query: string, response?: any, error?: any) {
  //   if (__DEV__ && global.originalXMLHttpRequest !== undefined) {
  //     var groupName = '%c[' + this.state.page + '] ' + 'Infinite scroll request'
  //     console.groupCollapsed(groupName, 'color:' + (response ? 'black' : 'red') + ';')
  //     console.log('Query:\n', query)
  //     if (response) {
  //       console.log('Response:\n', response)
  //     }
  //     console.groupEnd()
  //     if (error) {
  //       console.error('Error:\n', error)
  //     }
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props === undefined) {
      return true
    }

    if (!isEqual(this.props.queryState, nextProps.queryState)) {
      // Empty the artworks, and reset the state as we have new a query object
      this.setState({
        artworks: [],
        completed: false,
        page: 0,
        fetchingNextPage: false
      } as State)
      return true
    }

    return (!isEqual(this.props, nextProps) || !isEqual(this.state, nextState))
  }

  // onLayout = (event: React.LayoutChangeEvent) => {
  //   const layout = event.nativeEvent.layout
  //   if (layout.width > 0) {
  //     // This is the sum of all margins in between sections, so do not count to the right of last column.
  //     const sectionMargins = this.props.sectionMargin * (this.props.sectionCount - 1)
  //     this.setState({ sectionDimension: (layout.width - sectionMargins) / this.props.sectionCount } as State)
  //   }
  // }

  sectionedArtworks() {
    const sectionedArtworks: GQL.ArtworkType[][] = []
    const sectionRatioSums: number[] = []
    for (let i = 0; i < this.props.sectionCount; i++) {
      sectionedArtworks.push([])
      sectionRatioSums.push(0)
    }

    const artworks = this.state.artworks
    for (let i = 0; i < artworks.length; i++) {
      const artwork = this.state.artworks[i]

      // There are artworks without images and other ‘issues’. Like Force we’re just going to reject those for now.
      // See: https://github.com/artsy/eigen/issues/1667
      //
      if (artwork.image) {
        // Find section with lowest *inverted* aspect ratio sum, which is the shortest column.
        let lowestRatioSum = Number.MAX_VALUE // Start higher, so we always find a
        let sectionIndex: number = null
        for (let j = 0; j < sectionRatioSums.length; j++) {
          const ratioSum = sectionRatioSums[j]
          if (ratioSum < lowestRatioSum) {
            sectionIndex = j
            lowestRatioSum = ratioSum
          }
        }

        if (sectionIndex != null) {
          const section = sectionedArtworks[sectionIndex]
          section.push(artwork)

          // Keep track of total section aspect ratio
          const aspectRatio = artwork.image.aspect_ratio || 1 // Ensure we never divide by null/0
          // Invert the aspect ratio so that a lower value means a shorter section.
          sectionRatioSums[sectionIndex] += (1 / aspectRatio)
        }
      }
    }

    return sectionedArtworks
  }

  renderSections() {
    const spacerStyle = {
      height: this.props.itemMargin,
    }

    const sectionedArtworks = this.sectionedArtworks()
    const sections = []
    for (let i = 0; i < this.props.sectionCount; i++) {
      const artworkComponents = []
      const artworks = sectionedArtworks[i]
      for (let j = 0; j < artworks.length; j++) {
        const artwork = artworks[j]
        artworkComponents.push(<Artwork artwork={artwork} key={`artwork-${j}-${artwork.__id}`} />)
        // Setting a marginBottom on the artwork component didn’t work, so using a spacer view instead.
        if (j < artworks.length - 1) {
          artworkComponents.push(
            <View style={spacerStyle} key={'spacer-' + j + '-' + artwork.__id} accessibilityLabel="Spacer View" />
          )
        }
      }

      const sectionSpecificStyle = {
        width: this.state.sectionDimension,
        marginRight: (i === this.props.sectionCount - 1 ? 0 : this.props.sectionMargin),
      }

      sections.push(
        <View style={[styles.section, sectionSpecificStyle]} key={i} accessibilityLabel={'Section ' + i} >
          {artworkComponents}
        </View>
      )
    }
    return sections
  }

  // Lifted pretty much straight from RN’s ListView.js
  onScroll = (event: React.NativeSyntheticEvent<React.NativeScrollEvent>) => {
    const scrollProperties = event.nativeEvent
    const contentLength = scrollProperties.contentSize.height
    if (contentLength !== this._sentEndForContentLength) {
      const offset = scrollProperties.contentOffset.y
      const visibleLength = scrollProperties.layoutMeasurement.height
      const distanceFromEnd = contentLength - visibleLength - offset
      if (distanceFromEnd < PageEndThreshold) {
        this._sentEndForContentLength = contentLength
        this.fetchNextPage()
      }
    }
  }

  render() {
    // const artworks = this.state.sectionDimension ? this.renderSections() : null
    const artworks = this.renderSections()
    return (
      <ScrollView onScroll={this.onScroll}
        scrollEventThrottle={50}
        // onLayout={this.onLayout}
        // scrollsToTop={false}
        accessibilityLabel="Artworks ScrollView" >
        <View style={styles.container} accessibilityLabel="Artworks Content View" >
          {artworks}
        </View>
        {this.state.fetchingNextPage ? <Spinner style={styles.spinner} /> : null}
      </ScrollView>
    )
  }
}

interface Styles {
  container: ViewStyle,
  section: ViewStyle,
  spinner: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  section: {
    // flex: "1 0 0px",
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
    maxWidth: 300,
  },
  spinner: {
    marginTop: 20,
  },
})

const InfiniteScrollArtworksGridContainer = Relay.createContainer(InfiniteScrollArtworksGrid, {
  fragments: {
    artworks: () => Relay.QL`
      fragment on Artwork @relay(plural: true) {
        __id
        image {
          aspect_ratio
        }
        ${Artwork.getFragment('artwork')}
      }
    `,
  }
})

// TODO: While we do pagination manually, we can’t actually use a Relay container around Artwork.
const container: any = InfiniteScrollArtworksGridContainer
container.artworksQuery = (artistID, filter, page) => {
  return `
    query {
      artist(id: "${artistID}") {
        artworks(sort: partner_updated_at_desc, filter: ${filter} size: ${PageSize}, page: ${page}) {
          __id
          title
          date
          sale_message
          is_in_auction
          image {
          url(version: "large")
            aspect_ratio
          }
          artist {
            name
          }
          partner {
            name
          }
          href
        }
      }
    }
  `
}

export default InfiniteScrollArtworksGridContainer
