import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { Article } from '../app/data/model/Article'
import TextComponent from '../../components/text'
import styles from './styles'
import Avatar from '../../components/avatar'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getDataObject, storeDataObject } from '../utils/StorageHelper'
import { UserProfile } from '../app/data/model/UserProfile'
import { Liker } from '../app/data/model/Liker'
const myIcon = <Icon name="rocket" size={30} color="#900" />;


interface Props {}

type State = {
    article: Article
    likes: number
    isLiked: boolean
    currentUser: UserProfile
    isCurrentUser: boolean
}

class ArticleScreen extends Component<Props, State> {
    
    constructor (props: Props) {
        super(props)
        const {article, currentUser, isCurrentUser} = this.props.route.params
        this.state = {
            article,
            likes: article.likers.length,
            isLiked: this.isLiked(article.likers, currentUser),
            currentUser,
            isCurrentUser
        }
    }

    onPressLike = async () => {
        const {isLiked, currentUser, article, isCurrentUser} =this.state
        if (isCurrentUser) return
        
        let currentLikers = await getDataObject('likes') as Liker[]
        if (!isLiked) {
            currentLikers.push({id: currentUser.profile.id, articleId: article.id})
        } else {
            const array = [...currentLikers]
            currentLikers = array.filter(item => item.id !== currentUser.profile.id && item.articleId === article.id)
        }
        await storeDataObject('likes', currentLikers)
        this.setState({isLiked: !isLiked})
    }

    isLiked = (likers: Liker[], currentUser: UserProfile) => {
        const likersResult = likers.filter(item => item.id === currentUser.profile.id)
        return likersResult.length > 0
    }

    render() {
        const {article, isLiked, likes} = this.state
        return (
            <ScrollView style={styles.container}>
                <Avatar image={article.thumbnail} style={styles.image}/>
                <TextComponent text={article.title} style={styles.title} />
                <TextComponent text={article.date} style={styles.subTitle} />
                
                <View style={{flexDirection:'row', alignContent: 'center', alignItems: 'center'}}>
                    <TextComponent text={`${article.likers.length} likes`} style={styles.likes} />
                    <TouchableOpacity onPress={() => this.onPressLike()} style={styles.likeIconContainer}>
                        <View>
                            {isLiked ? 
                                <Icon active name="thumbs-up" color='blue' size={35}/>
                                : <Icon name="thumbs-up" color='black' size={35}/>
                            }
                        </View>
                    </TouchableOpacity>
                </View>       
                <TextComponent text={article.description} style={styles.description} />
            </ScrollView>
        )
    }
    
}

export default ArticleScreen