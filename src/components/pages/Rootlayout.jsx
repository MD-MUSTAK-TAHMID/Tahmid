import React from 'react'
import Navber from '../Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default rootlayout