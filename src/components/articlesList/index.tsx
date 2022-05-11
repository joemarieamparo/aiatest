import React from 'react'
import { FlatList, View } from 'react-native'
import { Article } from '../../screens/app/data/model/Article'
import ArticleItemComponent from '../articleItemComponent'
import TextComponent from '../text'
import styles from './styles'

type Props = {
    articles: Article[]
    onItemClick: (article: Article) => void
    header?: string
}
const ArticlesListComponent = (props: Props) => {
  const {articles, header, onItemClick} = props
  return (
    <View style={styles.container}>
      {header && <TextComponent text={header} style={styles.headerStyle}/>}
      <FlatList
        data={articles}
        renderItem={({item}) => <ArticleItemComponent article={item} onItemClick={onItemClick} />}
      />
    </View>
  );
}

export default ArticlesListComponent;