import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import R from '../../assets'
import Avatar from '../../components/avatar'
import { Article } from '../../screens/app/data/model/Article'
import TextComponent from '../text'
import styles from './styles'

type Props = {
    article: Article
    onItemClick: (article: Article) => void
}

const ArticleItemComponent = (props: Props) => {
    const {article, onItemClick} = props
    return (
        <TouchableOpacity style={styles.container} onPress={() => onItemClick(article)} >
            <TextComponent text={`${article.title} (${article.likers.length} likes)`} style={styles.item} />
        </TouchableOpacity>
    )
}

export default ArticleItemComponent