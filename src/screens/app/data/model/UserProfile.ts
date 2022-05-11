import { Article } from "./Article";
import { Profile } from "./Profile";

export interface UserProfile {
    profile: Profile
    followers: Profile[]
    articles: Article[]
}