import React from 'react'
import Container from '../layer/Container'

const About = () => {
  return (
    <div>
        <Container className="lg:px-0 px-3">
            <h3 className='font-In text-[#FFFFFF] lg:text-[48px] md:text-4xl sm:text-2xl text-xl font-bold lg:pt-[64px] md:pt-12 sm:pt-9 pt-7 lg:pb-[49px] md::pb-[38px] sm:pb-[30px] pb-6'>
                About Me
            </h3>
            <h6 className='font-In text-[#FFFFFF] lg:text-[32px] md:text-2xl sm:text-xl text-lg lg:pb-[36px] md:pb-7 sm:pb-5 pb-3'>
                Personal Info
            </h6>
           <div className="flex lg:gap-y-6 md:gap-y-5 sm:gap-y-4 gap-y-3 flex-wrap lg:gap-x-[54px] sm::gap-x-[35px] gap-x-[30px] md::gap-x-[40px] ">
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
           </div>
        </Container>
    </div>
  )
}

export default About