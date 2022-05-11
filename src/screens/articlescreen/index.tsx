import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Article } from '../app/data/model/Article'
import TextComponent from '../../components/text'
import styles from './styles'
import Avatar from '../../components/avatar'

interface Props {}

type State = {
    article: Article
}

class ArticleScreen extends Component<Props, State> {
    
    constructor (props: Props) {
        super(props)
        const {article} = this.props.route.params
        this.state = {
            article
        }
    }

    render() {
        const {article} = this.state
        return (
            <ScrollView style={styles.container}>
                <Avatar image={article.thumbnail} style={styles.image}/>
                <TextComponent text={article.title} style={styles.title} />
                <TextComponent text={article.date} style={styles.subTitle} />
                <TextComponent text={`${article.likers} likes`} style={styles.subTitle} />
                <TextComponent text={article.description} style={styles.description} />
            </ScrollView>
        )
    }
    
}

export default ArticleScreen