import useSWR from 'swr'
import Movie from './MovieListMovie';
import type { MovieData, MovieListProps } from '../types';
import React from 'react';

const fetcher = (url:string) => fetch(url).then(res => res.json())

const MovieList: React.FC<MovieListProps> = ({posterImageBaseURL}) => {
  const { data, error } = useSWR('/api/movies', fetcher);
  if (error) return (<p className="bg-red-100 text-red-800 p-6 rounded-lg">An error has occurred.</p>);
  if (!data) return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
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