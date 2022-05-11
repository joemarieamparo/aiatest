import { Profile } from "./Profile"

export interface Article {
    title: string,
    description: string
    likers: Profile[]
    date: string
    thumbnail: any
}