import React from 'react'
import { View } from 'react-native'
import { UserProfile } from '../../screens/app/data/model/UserProfile'
import TextComponent from '../text'
import styles from '../../screens/profilescreen/styles'
import Avatar from '../avatar'
import { Profile } from '../../screens/app/data/model/Profile'
import { Article } from '../../screens/app/data/model/Article'

type Props = {
    userProfile: UserProfile
    onItemClick: (profile: Profile) => void
    onPressArticles: (articles: Article[]) => void
}

const ProfileComponent = (props: Props): JSX.Element => {
    const {userProfile, onItemClick, onPressArticles} = props
    const {profile} = userProfile
    return (
        <View style={styles.userInfoContainer}>
            <Avatar image={profile.avatar} />
            <TextComponent testId='name' text={profile.name} style={styles.profileName} />
            <TextComponent testId='title' text={profile.title} />
        </View>
    )
}
export default ProfileComponent