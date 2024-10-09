import React from 'react'
import Container from '../layer/Container'
import Tittle from '../layer/Tittle'
import { CircularProgressbar } from 'react-circular-progressbar'
import Progressbar from '../layer/Progressbar'
import Progressbar_HTML from '../layer/Progressbar_HTML'
import Progressbar_React from '../layer/Progressbar_React'
import Progressbar_Bootstrap from '../layer/Progressbar_Bootstrap'
const Skills = () => {
    let percentage = 80;
    let percentage2 = 70;
  return (
    <div>
        <Container className='pb-[100px]'>
            <Tittle text="Skills"/>
            <div className="flex flex-wrap gap-y-[70px] gap-x-[130px] max-w-[1026px] mx-auto">
                <Progressbar_HTML text="HTML" persent={60}/>
                <Progressbar_HTML text="CSS" persent={60}/>
                <Progressbar text="Java Script" persent={60}/>
                <Progressbar_React text="React" persent={60}/>
                <Progressbar_Bootstrap text="Bootstrap CSS" persent={60}/>
                <Progressbar_React text="Tailwind CSS" persent={60}/>
                <Progressbar_Bootstrap text="Figma Design" persent={60}/>
                <Progressbar text="Redux" persent={60}/>
            </div>
            
        </Container>
    </div>
  )
}

export default Skills