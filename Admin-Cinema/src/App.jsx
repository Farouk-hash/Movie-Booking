import { Route, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { AddMoviesPage } from "./pages/AddMoviesPage"
import { ListMoviesPage } from "./pages/ListMoviesPage"

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/add-movies' element={<AddMoviesPage/>}/> 
        <Route path='/list-movies' element={<ListMoviesPage />} />
        {/* <Route path='/movies/movie:id' element={<MoviePageDetailsPage />}/> */}
      </Routes>
    </>
  )
}

export default App
