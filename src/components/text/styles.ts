import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import R from '../../assets'

interface Styles {
  name: TextStyle
}

const styles = StyleSheet.create<Styles>({
  name: {
    fontSize: R.fonts.size.size_15,
    fontWeight: 'bold',
    margin: R.dimens.margin.margin_8,
    alignSelf: 'center'
  }
});

export default styles