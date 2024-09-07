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
import Skills from './components/pages/Skills';
import About from './components/pages/About';
import Error from './components/pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error/>} element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Banner' element={<Banner/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/Error' element={<Error/>}></Route>
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