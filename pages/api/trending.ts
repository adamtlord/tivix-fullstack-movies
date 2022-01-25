import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = process.env.THEMOVIEDB_API_URL + 'trending/movie/week?api_key=' + process.env.THEMOVIEDB_API_KEY;
  let movieList;
  await fetch(url).then(
    res => {
      return res.json()
    }
  ).then(
    movieData => {
      const {results} = movieData;
      movieList = {
        results
      }
    }
  )
  res.status(200).json(JSON.stringify(movieList))
}
