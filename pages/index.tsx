import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import MovieList from '../components/MovieList'
import type { HomePageProps } from '../types'

const Home: NextPage<HomePageProps> = ({imageConfig}) => {
  const posterImageBaseURL = `${imageConfig.base_url}${imageConfig.poster_sizes[0]}`;
  const dateTo = new Date();
  const dateFrom = new Date();
  dateFrom.setDate(dateFrom.getDate() - 7);
  const dateRange = `${dateFrom.getMonth() + 1}/${dateFrom.getDate()}/${dateFrom.getFullYear()} - ${dateTo.getMonth() + 1}/${dateTo.getDate()}/${dateTo.getFullYear()}`
  return (
    <div>
      <Head>
        <title>Tivix Fullstack Movie Database</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h3 className="font-bold text-2xl mb-4">Trending Movies for {dateRange}</h3>
        <MovieList posterImageBaseURL={posterImageBaseURL} />
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const appURL = process.env.DEPLOY_URL || process.env.URL || process.env.APP_URL || 'http://localhost:3000';
  const res = await fetch(`${appURL}/api/configuration`);
  const imageConfig = await res.json();
  return {
    props: {
      imageConfig
    },
  }
}
