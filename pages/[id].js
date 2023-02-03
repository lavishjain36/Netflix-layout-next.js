import Layout from '../components/Layout'
import movies from './data/movie'
import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const movie = movies.find((m) => m.id === router.query.id)

  return (
    <Layout>
      <section>
        <img src={movies.poster} alt={movies.title} width="70%" />
        <h2>{movies.title}</h2>
        <p>{movies.description}</p>
      </section>
    </Layout>
  )
}

export default Movie
