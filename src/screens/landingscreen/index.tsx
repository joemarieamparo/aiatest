import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { getMockProfile} from '../app/data/mocks/UserData'
import { UserProfile } from '../app/data/model/UserProfile'
import ProfileComponent from '../../components/profile'
import styles from './styles'
import { Profile } from '../app/data/model/Profile'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import { Article } from '../app/data/model/Article'
import FollowersListComponent from '../../components/followersList'
import TextComponent from '../../components/text'
import R from '../../assets'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

type State = {
    userProfile: UserProfile
}
class LandingScreen extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state = {
          userProfile: getMockProfile('John Doe')
      }
    }
  
    onItemClick = (profile: Profile) => {
        const {navigation} = this.props
        const userProfile = getMockProfile(profile.name)
        navigation.navigate('ProfileScreen', {userProfile})
    }

    onPressArticles = (articles: Article[]) => {
        const {navigation} = this.props
        navigation.navigate('ArticlesScreen', {isCurrentUser: true, articles})
    }

    render() {
        const {userProfile} = this.state
        const followersLabel = R.strings.profileScreen.followers.replace('**data**', `${userProfile.followers.length}`)
        return (
            <SafeAreaView style={styles.container}>
                <ProfileComponent userProfile={userProfile} onItemClick={this.onItemClick} onPressArticles={this.onPressArticles} />
                <FollowersListComponent users={userProfile.followers} header={followersLabel} onItemClick={this.onItemClick} />
                <TouchableOpacity onPress={() => this.onPressArticles(userProfile.articles)} style={styles.bottomView} >
                    <TextComponent testId='articles' text={R.strings.profileScreen.yourArticles} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default LandingScreen
