import * as React from "react"
import { Animated, StyleSheet, Text, TouchableHighlight, View } from "react-native-web"

import Headline from "./text/headline"

import * as colors from "../../../../data/colors.json"

// import Spinner from '../spinner'
const Spinner = ({ spinnerColor, style }) => <div>SPINNER</div>

const AnimationDuration = 250
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight)
const AnimatedHeadline = Animated.createAnimatedComponent(Headline)

interface Props {
  text: string,
  selected: boolean,
  inProgress?: boolean,
  onPress: () => void,
  onSelectionAnimationFinished?: () => void,
}

interface State {
  textOpacity: Animated.Value,
  backgroundColor: Animated.Value
}

export default class InvertedButton extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      backgroundColor: new Animated.Value(props.selected ? 1 : 0),
      textOpacity: new Animated.Value(1),
    }
  }

  componentWillUpdate(nextProps: any, nextState: any) {
    if (this.props.selected !== nextProps.selected) {
      nextState.textOpacity.setValue(0)
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.selected !== prevProps.selected) {
      const duration = AnimationDuration
      Animated.parallel([
        Animated.timing(this.state.textOpacity, { toValue: 1, duration }),
        Animated.timing(this.state.backgroundColor, { toValue: this.props.selected ? 1 : 0, duration }),
      ]).start(this.props.onSelectionAnimationFinished)
    }
  }

  render() {
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: (["black", colors["purple-regular"]])
    })
    const styling = {
      style: [styles.button, { backgroundColor }],
      underlayColor: (this.props.selected ? "black" : colors["purple-regular"]),
    }
    let content = null
    if (this.props.inProgress) {
      content = <Spinner spinnerColor="white" style={{ backgroundColor: "transparent" }} />
    } else {
      content = (
        <AnimatedHeadline style={[styles.text, { opacity: this.state.textOpacity }]}>
          {this.props.text}
        </AnimatedHeadline>
      )
    }
    return (
      <AnimatedTouchable onPress={this.props.onPress} activeOpacity={1} disabled={this.props.inProgress} {...styling}>
        <View>{content}</View>
      </AnimatedTouchable>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white"
  }
})
