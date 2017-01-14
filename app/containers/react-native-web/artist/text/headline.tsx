import * as React from 'react'
import { StyleSheet, Text, TextStyle } from "react-native-web"

export default (props: { style: TextStyle, children?: string }) => (
  <Text style={[styles.default, props.style, styles.required]}>
    {props.children.toUpperCase()}
  </Text>
)

interface Styles {
  default: TextStyle,
  required: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  default: {
    fontSize: 12,
  },
  required: {
    fontFamily: "'ITC Avant Garde Gothic W04', 'AvantGardeGothicITCW01D 731075', AvantGardeGothicITCW01Dm, Helvetica, sans-serif",
  }
})
