import { MovieDetailsPage } from '../../components/MoviesPages/MovieDetailsPage'
import MOVIES from '../../assets/dummymdata.js' // for movies-movieDetails-page;  
import movies from '../../assets/dummymoviedata.js' // for homePage-featuredMovies;

export const MoviesDetails = () => {
  const allMovies = (MOVIES || []).concat(movies || []); 
  return (
    <>
        <MovieDetailsPage MOVIES={allMovies}/>
    </>
  )
}
