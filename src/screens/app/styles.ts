import {
    StyleSheet,
    ViewStyle,
  } from 'react-native'
  import R from '../../assets'
  
  interface Styles {
    container: ViewStyle
  }
  
  const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
      paddingHorizontal: R.dimens.margin.margin_8,
      paddingTop: R.dimens.margin.margin_60,
      paddingBottom: R.dimens.margin.margin_20
    }
  })
  export default styles
  