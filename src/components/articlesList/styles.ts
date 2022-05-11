import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import R from '../../assets'

interface Styles {
  container: ViewStyle
  item: ViewStyle
  headerStyle: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
   flex: 1,
   paddingTop: R.dimens.padding.padding_20
  },
  item: {
    padding: R.dimens.padding.padding_10,
    fontSize: R.fonts.size.size_15,
    height: R.dimens.height.height_40
  },
  headerStyle: {
    fontSize: R.fonts.size.size_15,
    fontWeight: 'bold',
    margin: R.dimens.margin.margin_8,
  }
});

export default styles