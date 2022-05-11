import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import { UserProfile } from '../app/data/model/UserProfile'
import ProfileComponent from '../../components/profile'
import styles from './styles'
import { Profile } from '../app/data/model/Profile'
import { getMockProfile } from '../app/data/mocks/UserData'
import { Article } from '../app/data/model/Article'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import R from '../../assets'
import FollowersListComponent from '../../components/followersList'
import TextComponent from '../../components/text'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

type State = {
    userProfile: UserProfile
}

class ProfileScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        const {userProfile} = this.props.route.params
        this.state = {
            userProfile
        }
      }

    onItemClick = (profile: Profile) => {
        if (!profile.isCurrentUser) {
            const userProfile = getMockProfile(profile.name)
            this.setState({userProfile})
        }
    }

    onPressArticles = (articles: Article[]) => {
        const {navigation} = this.props
        navigation.navigate('ArticlesScreen', {isCurrentUser: false, articles})
    }

    render() {
        const {userProfile} = this.state
        const followersLabel = R.strings.profileScreen.followers.replace('**data**', `${userProfile.followers.length}`)
        return (
            <SafeAreaView style={styles.container}>
                {/* <ProfileComponent userProfile={userProfile} onItemClick={this.onItemClick} onPressArticles={this.onPressArticles}/> */}
                {/* <FollowersListComponent users={userProfile.followers} header={followersLabel} onItemClick={this.onItemClick} /> */}
                <TouchableOpacity onPress={() => this.onPressArticles(userProfile.articles)} style={styles.bottomView} >
                    <TextComponent testId='articles' text={R.strings.profileScreen.seeArticles} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default ProfileScreen