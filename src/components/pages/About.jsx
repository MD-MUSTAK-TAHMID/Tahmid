import React from 'react'
import Container from '../layer/Container'
import Buttun from '../layer/Buttun'
import Tittle from '../layer/Tittle'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <div>
        <Container className="lg:px-0 px-3 pb-[100px]">
            <Tittle text="About Me"/>
            <h6 className='font-In text-[#FFFFFF] lg:text-[32px] md:text-2xl sm:text-xl text-lg lg:pb-[36px] md:pb-7 sm:pb-5 pb-3'>
                Personal Info
            </h6>
           <div className="flex lg:gap-y-6 md:gap-y-5 sm:gap-y-4 gap-y-3 flex-wrap md:flex-nowrap lg:gap-x-[54px] sm::gap-x-[35px] gap-x-[30px] md:gap-x-[40px] ">
           <div className="flex flex-col lg:gap-y-6 md:gap-y-5 sm:gap-y-4 gap-y-3">
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>First name</p><p>:</p>
                    </div>
                    <p>MD. Mustak</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Age</p><p>:</p>
                    </div>
                    <p>15</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Freelance</p><p>:</p>
                    </div>
                    <p>Available</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Phone</p><p>:</p>
                    </div>
                    <p>+8801553447450</p>
                </div>
            </div>
            <div className="flex flex-col lg:gap-y-6 md:gap-y-5 sm:gap-y-4 gap-y-3">
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Last name</p><p>:</p>
                    </div>
                    <p>Tahmid</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Nationality</p><p>:</p>
                    </div>
                    <p>Bangladeshi</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between  ">
                        <p>Address</p><p>:</p>
                    </div>
                    <p>New Market, Dhaka, Bangladesh</p>
                </div>
                <div className="flex lg:gap-x-8 md:gap-x-7 sm:gap-x-6 gap-x-5 text-[#FFFFFF] lg:text-[20px] md:text-lg sm:text-base text-sm">
                    <div className="lg:w-[155px] md:w-[120px] sm:w-24 w-[85px] flex justify-between items-center ">
                        <p>Email</p><p>:</p>
                    </div>
                    <p>md.mustak.tahmid08@gmail.com</p>
                </div>
            </div>
            <div className="">
                <p className='max-w-[427px] text-base text-white'>Dive into my portfolio and explore the fusion of creativity and technology. Whether it's coding in Python, crafting web solutions, or pushing the boundaries of hardware and robotics — every line of code tells a story.</p>
                <Buttun to="https://www.canva.com/design/DAGPQVLkfjk/OfAv72u4Csc4j5XKorAkQg/view?utm_content=DAGPQVLkfjk&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="group lg:text-[20px] lg:px-[17px] md:px-3 sm:px-2 px-1 lg:py-2 md:py-2 sm:py-1 py-1 md:rounded-[30px] rounded-2xl mt-7" text={<p className='flex items-center gap-5'>DOWNLOAD CV <div className="w-9 h-9 rounded-full border-2 border-[#0FE1C2] flex items-center justify-center group-hover:border-white text-sm transition-all duration-300 bg-[#0FE1C2]"><FaDownload /></div></p>}></Buttun>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default About