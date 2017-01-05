import * as React from "react"
import { StyleSheet, Text } from "react-native-web"

export default (props: { children?: React.ReactNode, style: Object }) => {
  const { children, style, ...rest } = props
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
