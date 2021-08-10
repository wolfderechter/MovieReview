import { Movie } from "./movie";
import { Review } from "./review";

export interface Member {
    id: number;
    username: string;
    reviews: Review[];
    watchlist: Movie[];
}