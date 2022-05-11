import R from "../../../../assets";
import { Article } from "../model/Article";
import { Profile } from "../model/Profile";
import { UserProfile } from "../model/UserProfile";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const description =`${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}\n${loremIpsum}`
const getProfile = (name: string, avatar: any, title: string, isCurrentUser?: boolean): Profile => {
    return {
        name,
        avatar,
        title,
        isCurrentUser
    }
}

const userProfile = getProfile('John Doe', R.images.userAvatar, 'I am the user of the application', true)
const user1Profile = getProfile('Mary Jean', R.images.otherUser1, 'I am another user of the application')
const user2Profile = getProfile('Mary Ann', R.images.otherUser2, 'I am another user of the application')

const article = (titleNumber: number, thumbnail: any, likers?: Profile[]): Article => {
    return {
        title: `Article #${titleNumber}`,
        description: description,
        likers,
        date: 'May 5, 2022',
        thumbnail
    }
}

const articles = (thumbnails: any[], likers?: Profile[]): Article[] => {
    return [
        article(1, thumbnails[0], likers), article(2, thumbnails[1], likers)
    ]
} 

const userProfileData: UserProfile = {
    profile: userProfile,
    followers: [user1Profile, user2Profile],
    articles: articles([R.images.thumbnail_3, R.images.thumbnail_4], [user1Profile])
}

const user1ProfileData: UserProfile = {
    profile: user1Profile,
    followers: [userProfile, user2Profile],
    articles: articles([R.images.thumbnail_3, R.images.thumbnail_4], [user2Profile])
}

const user2ProfileData: UserProfile = {
    profile: user2Profile,
    followers: [userProfile, user1Profile],
    articles: articles([R.images.thumbnail_5, R.images.thumbnail_6], [user1Profile])
}

export const getMockProfile = (name: string): UserProfile => {
    switch(name) {
        case 'Mary Jean': return user1ProfileData
        case 'Mary Ann': return user2ProfileData
        default: return userProfileData
    }
}

