import useSWR from 'swr'
import Movie from './Movie';
import type { MovieData, MovieListProps } from '../types';
import React from 'react';
import Image from 'next/image';


const fetcher = (url:string) => fetch(url).then((res) => res.json());

const MovieList: React.FC<MovieListProps> = ({posterImageBaseURL}) => {
  const { data, error } = useSWR('/api/trending', fetcher);
  if (error) return (<p className="bg-red-100 text-red-800 p-6 rounded-lg">An error has occurred.</p>);
  if (!data) return (
    <Image
      alt="Loading..."
      src="/loading.gif"
      layout="intrinsic"
      width={320}
      height={240}
    />
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