import React from 'react'
import { Navbar } from '../../components/Navbar'
import { ReleasesPage } from '../../components/MoviesPages/ReleasesPage'
import { Footer } from '../../components/Footer'

export const Releases = () => {
  return (
    <>
    <Navbar/>
      <ReleasesPage/>
    <Footer/>
    </>
  )
}
