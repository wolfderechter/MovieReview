import { Movie } from "./movie";

export interface Review {
    id: number;
    score: number;
    reviewtext: string;
    movie: Movie;
}
