import R from "../../../../assets";
import { Article } from "../model/Article";
import { Liker } from "../model/Liker";
import { Profile } from "../model/Profile";
import { UserProfile } from "../model/UserProfile";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const description =`${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}`
const getProfile = (id: number, name: string, avatar: any, title: string, isCurrentUser?: boolean): Profile => {
    return {
        id,
        name,
        avatar,
        title,
        isCurrentUser
    }
}

const userProfile = getProfile(1, 'John Doe', R.images.userAvatar, 'I am the user of the application', true)
const user1Profile = getProfile(2, 'Mary Jean', R.images.otherUser1, 'I am another user of the application')
const user2Profile = getProfile(3, 'Mary Ann', R.images.otherUser2, 'I am another user of the application')

const article = (id: number, titleNumber: number, thumbnail: any, author: string, likers?: Liker[]): Article => {
    return {
        id,
        title: `Article #${titleNumber}`,
        description: description,
        likers: likers ?? [],
        date: 'May 5, 2022',
        thumbnail, 
        author
    }
}

const articles = (
    thumbnails: any[], 
    author: string, 
    articleIds: number[],
    likers?: Liker[]
): Article[] => {
    return [
        article(articleIds[0], 1, thumbnails[0], author, likers), 
        article(articleIds[1], 2, thumbnails[1], author, likers)
    ]
} 

const userProfileData: UserProfile = {
    profile: userProfile,
    followers: [user1Profile, user2Profile],
    articles: articles(
        [R.images.thumbnail_3, R.images.thumbnail_4], 
        userProfile.name, 
        [10, 20],
        [{id: user1Profile.id, articleId: 10}]
    )
}

const user1ProfileData: UserProfile = {
    profile: user1Profile,
    followers: [userProfile, user2Profile],
    articles: articles(
        [R.images.thumbnail_3, R.images.thumbnail_4], 
        user1Profile.name, 
        [30, 40],
        [{id: user2Profile.id, articleId: 40}])
}

const user2ProfileData: UserProfile = {
    profile: user2Profile,
    followers: [userProfile, user1Profile],
    articles: articles(
        [R.images.thumbnail_5, R.images.thumbnail_6], 
        user2Profile.name, 
        [50, 60],
        [{id: user1Profile.id, articleId: 50}])
}

export const getMockProfile = (name: string): UserProfile => {
    switch(name) {
        case 'Mary Jean': return user1ProfileData
        case 'Mary Ann': return user2ProfileData
        default: return userProfileData
    }
}

