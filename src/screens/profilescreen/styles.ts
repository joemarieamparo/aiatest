import {
  ImageStyle,
    StyleSheet,
    TextStyle,
    ViewStyle,
  } from 'react-native'
  import R from '../../assets'
  
  interface Styles {
    container: ViewStyle
    userInfoContainer: ViewStyle
    profileName: TextStyle
    title: TextStyle
    bottomView: ViewStyle
  }
  
  const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
      padding: R.dimens.margin.margin_8,
      marginTop: R.dimens.margin.margin_8
    },
    userInfoContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    profileName: {
      fontSize: R.fonts.size.size_30,
      fontWeight: 'bold',
      marginVertical: R.dimens.margin.margin_8
    },
    title: {
      fontSize: R.fonts.size.size_15,
      marginVertical: R.dimens.margin.margin_8
    },
    bottomView: {
      width: '50%',
      height: R.dimens.height.height_50,
      backgroundColor: R.colors.vividBlue,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginBottom: R.dimens.margin.margin_10,
      bottom: 0,
    }
  })
  export default styles
  