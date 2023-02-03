import Layout from '../components/Layout'
import Link from 'next/link'
import movies from './data/movie'

const Home = () => (
  <Layout>
    <section>
      {movies.map((movie) => (
        <Link legacyBehavior key={movie.id} href="/[id]" as={`/${movie.id}`}>
          <a>
            <img src={movie.poster} alt={movie.title} width="100%" />
            <h2>{movie.title}</h2>
          </a>
        </Link>
      ))}
    </section>
  </Layout>
)

export default Home
