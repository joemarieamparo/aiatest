import { Liker } from "./Liker"
import { Profile } from "./Profile"

export interface Article {
    id: number
    title: string,
    description: string
    likers: Liker[]
    date: string
    thumbnail: any,
    author?: string
}