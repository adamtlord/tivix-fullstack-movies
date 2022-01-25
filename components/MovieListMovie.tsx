import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MovieProps } from '../types';

const Movie: React.FC<MovieProps> = ({movie, posterImageBaseURL}) => {
  return (
    <li className="py-4 flex items-center justify-between">
      <div className="flex items-center">
      <Image
        alt={movie.title}
        src={`${posterImageBaseURL}${movie.poster_path}`}
        width={92}
        height={138}
       />
       <div className="ml-6">

        <h3 className="text-xl font-semibold hover:text-red-700 hover:underline cursor-pointer">
          <Link href={`/movies/${movie.id}`}>
            <a>{movie.title}</a>
          </Link>
        </h3>
        <p>Released {new Date(movie.release_date).toDateString()}</p>
       </div>
       </div>
       <div>
        <span className={`rounded-full text-white flex items-center justify-center h-12 w-12 text-xl font-extrabold ${movie.vote_average < 5 ? 'bg-green-900' : movie.vote_average < 8 ? 'bg-green-700' : 'bg-green-500'}`}>
          {movie.vote_average}
          </span>
       </div>
    </li>
  )
}

export default Movie;