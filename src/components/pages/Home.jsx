import React from 'react'
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Certificates from './Certificates'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <section id='Banner'>
      <Banner/>
      </section>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </div>
  )
}

export default Home