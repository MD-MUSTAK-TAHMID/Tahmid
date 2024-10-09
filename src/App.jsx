import React from 'react'
import Navber from './components/Navber'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./components/pages/Rootlayout"
import Home from './components/pages/Home';
import Banner from './components/pages/Banner';
import Skills from './components/pages/Skills';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Certificates from './components/pages/Certificates';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error/>} element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Banner' element={<Banner/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/Certificates' element={<Certificates/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Error' element={<Error/>}></Route>
    </Route>
  )
);

<section>
  <Home id="Home"/>
</section>


const App = () => {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App