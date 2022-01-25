import {NextApiRequest} from 'next';

interface ImageConfig {
  base_url: string;
  poster_sizes: string[];
}

export interface MovieData {
  video:             boolean;
  vote_average:      number;
  overview:          string;
  release_date:      string;
  adult:             boolean;
  backdrop_path:     string;
  vote_count:        number;
  genre_ids:         number[];
  title:             string;
  original_language: string;
  original_title:    string;
  poster_path:       string;
  id:                number;
  popularity:        number;
  media_type:        string;
}

export interface HomePageProps {
  imageConfig: ImageConfig;
  trendingMovies: MovieData[];
}

export interface MovieListProps {
  posterImageBaseURL: string;
}

export type MovieProps = {
  posterImageBaseURL: string,
  movie: MovieData,
}

export type MovieDetailProps = {
  movieID: string;
}

export interface MovieDetailsRequest extends NextApiRequest {
  id: string
}