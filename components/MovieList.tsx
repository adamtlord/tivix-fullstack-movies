import useSWR from 'swr'
import Movie from './MovieListMovie';
import type { MovieData, MovieListProps } from '../types';
import React from 'react';
import Spinner from './Spinner';

const fetcher = (url:string) => fetch(url).then(res => res.json())

const MovieList: React.FC<MovieListProps> = ({posterImageBaseURL}) => {

  const { data, error } = useSWR('/api/movies', fetcher);
  if (error) return (<p className="bg-red-100 text-red-800 p-6 rounded-lg">An error has occurred.</p>);
  if (!data) return (
    <Spinner />
  );
  const movieList = data.results.map((movie:MovieData) => (
    <Movie key={movie.id} movie={movie} posterImageBaseURL={posterImageBaseURL} />
  ));
  return (
    <ul className="divide-y">
    {movieList}
    </ul>
  )
}

export default MovieList;