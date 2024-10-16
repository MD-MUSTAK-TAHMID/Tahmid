import React from 'react'
import Container from '../layer/Container'
import Buttun from '../layer/Buttun'
import image from "../../assets/image.png"
const Banner = () => {
  return (
    <div>
      <Container className="flex justify-between flex-wrap lg:px-0 px-3 items-center">
        <div className="right md:order-1 order-2" data-aos="fade-up"   data-aos-duration="2000">
          <h4 className='font-In text-[#FFFFFF] lg:text-[24px] md:text-xl sm:text-lg text-sm font-normal lg:pt-[64px] md:pt-14 sm:pt-12 pt-9 md:pb-[9px] sm:pb-[7px] pb-1 '>Welcome to my portfolio</h4>
          <h1 className='font-In text-[#FFFFFF] lg:text-[48px] md:text-4xl sm:text-2xl text-xl font-bold lg:pt-[64px] md:pt-12 sm:pt-9 pt-7 md:pb-[9px] sm:pb-[7px]   max-w-[482px]'>HELLO I AM</h1>
          <h1 className='font-In text-[#FFFFFF] lg:text-[48px] md:text-4xl sm:text-2xl text-xl font-bold pb-[29px] max-w-[511px]'>MD. MUSTAK TAHMID</h1>
          <p className='font-In text-[#FFFFFF] lg:text-lg md:text-base sm:text-sm text-xs font-normal md:pb-[9px] sm:pb-[7px] pb-1 max-w-[511px]'>Java Script Developer , Fornt End Web Developer , Student</p>
          <p className='font-In text-[#FFFFFF] lg:text-lg md:text-base sm:text-sm text-xs font-normal lg:pb-[58px] md:pb-12 sm:pb-9 pb-7 max-w-[511px]'>BMARPC , Creative It Institute</p>
          <Buttun text="CONTACT ME" className=""/>
        </div>
        <div className="left md:order-2 order-1" data-aos="fade-left"   data-aos-duration="2000">
            <img src={image} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Banner