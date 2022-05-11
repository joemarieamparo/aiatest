import {
  ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle,
  } from 'react-native'
  import R from '../../assets'
  
  interface Styles {
    container: ViewStyle
    title: TextStyle
    subTitle: TextStyle
    description: TextStyle
    image: ImageStyle
  }
  
  const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
      padding: R.dimens.margin.margin_8,
      marginTop: R.dimens.margin.margin_8
    },
    title: {
      fontSize: R.fonts.size.size_30,
      fontWeight: 'bold',
      marginVertical: R.dimens.margin.margin_8,
      color: R.colors.vividBlue
    },
    subTitle: {
      fontSize: R.fonts.size.size_10,
      marginVertical: R.dimens.margin.margin_8
    },
    description: {
      fontSize: R.fonts.size.size_15,
      marginVertical: R.dimens.margin.margin_8
    },
    image: {
      width: '100%'
    }
  })
  export default styles
  