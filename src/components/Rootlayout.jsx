import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'

const rootlayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
    </div>
  )
}

export default rootlayout