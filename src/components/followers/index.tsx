import React from 'react'
import { TouchableOpacity } from 'react-native'
import R from '../../assets'
import Avatar from '../../components/avatar'
import { Profile } from '../../screens/app/data/model/Profile'
import TextComponent from '../text'
import styles from './styles'

type Props = {
    user: Profile
    onItemClick: (profile: Profile) => void
}

const FollowersComponent = (props: Props) => {
    const {user, onItemClick} = props
    return (
        <TouchableOpacity style={styles.container} onPress={() => onItemClick(user)} >
            <Avatar image={user.avatar} style={styles.avatar}/>
            <TextComponent text={`${user.name} ${user.isCurrentUser ?  R.strings.profileScreen.you : ''}`} style={styles.name} />
        </TouchableOpacity>
    )
}

export default FollowersComponent