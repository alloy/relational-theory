import * as React from 'react'
import { StyleSheet, Text } from "react-native-web"

export default (props: { style: Object, children?: string }) => (
  <Text style={[styles.default, props.style, styles.required]}>
    {props.children.toUpperCase()}
  </Text>
)

const styles = StyleSheet.create({
  default: {
    fontSize: 12
  },
  required: {
    fontFamily: "'ITC Avant Garde Gothic W04', 'AvantGardeGothicITCW01D 731075', AvantGardeGothicITCW01Dm, Helvetica, sans-serif",
  }
})
