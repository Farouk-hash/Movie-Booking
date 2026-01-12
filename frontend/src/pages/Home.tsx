import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"
import { Movies } from "../components/Movies"
import { Navbar } from "../components/Navbar"
import { News } from "../components/News"
import { Trailers } from "../components/Trailers"

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Movies />
      <Trailers />
      <News />
      <Footer />
    </>
  )
}
