import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Auth/Login"
import { Signup } from "./pages/Auth/Signup"
import { Movies } from "./pages/Movies/Movies"
import { Releases } from "./pages/Movies/Releases"
import { Contact } from "./pages/Contact/Contact"
import { MoviesDetails } from "./pages/Movies/MoviesDetails"
import { MovieSeatedPage } from "./pages/Movies/MovieSeatedPage"

export const App = () => {
  return (
     <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/movies' element={<Movies />}/>
            <Route path='/releases' element={<Releases />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies/movie/:id" element={<MoviesDetails />}/>
            <Route path="/movies/movie/:id/seated-selector" element={<MovieSeatedPage />}/>

        </Routes>
     </>
  )
}
