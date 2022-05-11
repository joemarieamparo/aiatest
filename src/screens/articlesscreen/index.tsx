import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import ArticlesListComponent from '../../components/articlesList'
import { Article } from '../app/data/model/Article'
import styles from './styles'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

type State = {
    articles: Article[]
}

class ArticlesScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        const {articles} = this.props.route.params
        this.state = {
            articles
        }
    }

    onItemClick = (article: Article) => {
        const {navigation} = this.props
        navigation.navigate('ArticleScreen', {
            article: article
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