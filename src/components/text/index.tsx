import React from 'react'
import {TextStyle, Text} from 'react-native'
import {testIdProps} from '../../screens/utils'
import R from '../../assets'
import styles from './styles'

type Props = {
  testId?: string
  text: string
  style?: TextStyle
}

/**
 * Generic text component based on react-native-paper
 */
const TextComponent = (props: Props): JSX.Element => {
  const {testId, text, style} = props

  const textTestId = testId || 'text_id'
  return (
    <Text
      {...testIdProps(R.strings.testIdText.text + textTestId)}
      allowFontScaling={false}
      style={style ?? styles.name}>
      {text}
    </Text>
  )
}

export default TextComponent
