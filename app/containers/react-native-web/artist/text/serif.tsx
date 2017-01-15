import * as React from "react"
import { StyleSheet, Text, TextProperties } from "react-native-web"

export default (props: TextProperties) => {
  // FIXME Only taking `ref` out of `rest` because the TS compiler complains about passing that on.
  const { children, style, ref, ...rest } = props
  return (
    <Text style={[styles.default, style, styles.required]} numberOfLines={1} {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 17
  },
  required: {
    fontFamily: "'Adobe Garamond W08', adobe-garamond-pro, AGaramondPro-Regular, 'Times New Roman', Times, serif",
  }
})
