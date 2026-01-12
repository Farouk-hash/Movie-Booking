import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { MovieSeated } from '../../components/MoviesPages/MovieSeated'

export const MovieSeatedPage = () => {
  return (
    <>
        <Navbar/>
            <MovieSeated />
        <Footer/>
    </>
  )
}
