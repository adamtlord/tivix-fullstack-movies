import type { NextApiResponse } from 'next'
import { MovieDetailsRequest } from '../../../types';

export default async function handler(
  req: MovieDetailsRequest,
  res: NextApiResponse
) {
  const {id} = req.query;
  const url = `${process.env.THEMOVIEDB_API_URL}movie/${id}?api_key=${process.env.THEMOVIEDB_API_KEY}`;
  console.log(url)
  let movieData;
  await fetch(url).then(
    res => {
      return res.json()
    }
  ).then(
    movieDetails => movieData=movieDetails
  )
  res.status(200).json(JSON.stringify(movieData))
}
