import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import R from '../../assets'

interface Styles {
  container: ViewStyle
  name: TextStyle
  avatar: ImageStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
   flex: 1,
   padding: R.dimens.padding.padding_10,
   flexDirection: 'row'
  },
  name: {
    fontSize: R.fonts.size.size_15,
    fontWeight: 'bold',
    margin: R.dimens.margin.margin_8,
    alignSelf: 'center'
  },
  avatar: {
    height: R.dimens.height.height_50,
    width: R.dimens.width.width_50
  }
});

export default styles