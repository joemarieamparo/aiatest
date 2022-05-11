import React from 'react'
import {StatusBar, ViewStyle, StyleProp} from 'react-native'
import R from '../../assets/index'

export const StatusBarComponent = (props: {
  hidden?: boolean
  translucent?: boolean
  networkActivityIndicatorVisible?: boolean
  backgroundColor?: string
  statusBarStyle?: 'dark-content' | 'default' | 'light-content'
  headerStyle?: StyleProp<ViewStyle>
}) => {
  const {
    hidden = false,
    translucent = false,
    networkActivityIndicatorVisible = true,
    statusBarStyle = 'dark-content',
    backgroundColor = 'white'
  } = props
  return (
    <StatusBar
      // dark-content, light-content and default
      barStyle={statusBarStyle}
      // To hide statusBar
      hidden={hidden}
      // allowing light, but not detailed shapes
      translucent={translucent}
      // The background color of the status bar. Android-only
      backgroundColor={backgroundColor}
      // Control the visibility of the network activity indicator. iOS-only.
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
    />
  )
}
