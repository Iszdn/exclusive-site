import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import BackToTopButton from '../../components/BackToTop'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <BackToTopButton/>
    </>
  )
}

export default Layout