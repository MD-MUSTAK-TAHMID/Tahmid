import React from 'react'
import Navber from './components/Navber'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./components/Rootlayout"
import Home from './components/pages/Home';
import Banner from './components/pages/Banner';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Banner' element={<Banner/>}></Route>
    </Route>
  )
);


const App = () => {
  return (
    <div className='bg-black'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App