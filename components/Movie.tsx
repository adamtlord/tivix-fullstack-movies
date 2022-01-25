import React from 'react';
import Image from 'next/image';
import type { MovieProps } from '../types';

const Movie: React.FC<MovieProps> = ({movie, posterImageBaseURL}) => {
  return (
    <li className="py-4">
      <Image
        alt={movie.title}
        src={`${posterImageBaseURL}${movie.poster_path}`}
        width={92}
        height={138}
       />
      {movie.title}
    </li>
  )
}

export default Movie;