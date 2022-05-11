import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import ArticlesListComponent from '../../components/articlesList'
import { Article } from '../app/data/model/Article'
import { Liker } from '../app/data/model/Liker'
import { UserProfile } from '../app/data/model/UserProfile'
import { getDataObject } from '../utils/StorageHelper'
import styles from './styles'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

type State = {
    articles: Article[]
    currentUser: UserProfile
    isCurrentUser: boolean
}

class ArticlesScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        const {articles, currentUser, isCurrentUser} = this.props.route.params
        this.state = {
            articles,
            currentUser,
            isCurrentUser
        }
    }

    onItemClick = async (article: Article) => {
        const {navigation} = this.props
        const {currentUser, isCurrentUser} = this.state
        const currentLikers = await getDataObject('likes') as Liker[]
        const filteredLikers = currentLikers.filter(item => item.articleId === article.id)
        const newArticle = {
            ...article,
            likers: [...article.likers, ...filteredLikers]
        }
        navigation.navigate('ArticleScreen', {
            article: newArticle,
            currentUser,
            isCurrentUser
        })
    }

    render() {
        const {articles} = this.state
        return (
            <SafeAreaView style={styles.container}>
                <ArticlesListComponent articles={articles} onItemClick={this.onItemClick} />
            </SafeAreaView>
        )
    }
}
export default ArticlesScreen