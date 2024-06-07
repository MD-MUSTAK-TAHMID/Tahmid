import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Container from './layer/Container'
import { FaBars } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Navber = () => {
  let percentage = 90;
  let [show , setshow] = useState(false)
  let fre = ()=>{
    setshow(!show)
  } 
  useEffect(()=>{
    let size =()=>{
      if (window.innerWidth > 1024) {
        setshow(true)
      }else{
        setshow(false)
      }
    }
    size()
    window.addEventListener("resize", size)
  },[])
  return (
    <nav className='py-5 '>
        <Container className="flex justify-between items-center relative">
        <div className='flex justify-between items-center w-full px-3 lg:px-0'>
          <div className="logo">
                <Link to="/">
                    <img className='w-[200px]' src={logo} alt="" />
                </Link>
            </div>
            <FaBars onClick={fre} className="md:hidden block text-[#8554ff] text-[25px]"/>
        </div>
           {
            show&&(
              <ul className='flex md:gap-x-[26px] sm:gap-x-[10px] sm:gap-y-0 gap-y-2 gap-x-[37px] md:static absolute left-0 md:bg-transparent bg-slate-700 flex-wrap px-3 justify-center items-center top-[115%] w-full'>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                    Home
                </Link>
              </li>
              <li>
                <Link to="/About" className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                    About
                </Link>
              </li>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                  Education
                </Link>
              </li>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                  Skill
                </Link>
              </li>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                  Projects
                </Link>
              </li>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                  Certificates
                </Link>
              </li>
              <li>
                <Link className='font-In text-[#9A9393] lg:text-lg md:text-base sm:text-sm text-xs font-normal transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]'>
                  Contact
                </Link>
              </li>
            </ul>
            )
           }
          <div className="w-10 h-10">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />;
          </div>
          <h1>Hello</h1>
        </Container>
    </nav>
  )
}

export default Navber