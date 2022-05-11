import React from 'react'
import { Image, ImageStyle } from 'react-native'

type Props = {
    image: any,
    style?: ImageStyle
}

const Avatar = (props: Props): JSX.Element => {
    const {image, style} = props
    return (
        <Image source={image} style={style ?? {}}/>
    )
}

export default Avatar