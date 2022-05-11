import {Platform} from 'react-native'

export const isAndroid = Platform.OS === 'android'

export const testIdProps = (testID: string) => {
    return isAndroid
      ? {accessible: true, testID}
      : {testID}
  }