import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = process.env.THEMOVIEDB_API_URL + 'configuration?api_key=' + process.env.THEMOVIEDB_API_KEY;
  let config;
  await fetch(url).then(
    res => {
      return res.json()
    }
  ).then(
    configData => {
      const {base_url, poster_sizes}  = configData.images;
      config = {
        base_url,
        poster_sizes
      }
    }
  );
  res.status(200).json(JSON.stringify(config))
}