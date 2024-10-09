import React from 'react'
import Tittle from '../layer/Tittle'
import Container from '../layer/Container'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Project_2 from "../../assets/Project_2.png"
import Project_1 from "../../assets/Project_1.png"
import Project_3 from "../../assets/Project_3.png"
import Project_4 from "../../assets/Project_4.png"
import Project_5 from "../../assets/Project_5.png"
import Project_6 from "../../assets/Project_6.png"
import Project_8 from "../../assets/Project_8.png"
import Project_7 from "../../assets/Project_7.png"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} border-[3px] border-[#0FE1C2] text-3xl text-[#0FE1C2] hover:text-white w-[64px] h-[64px] absolute lg:right-5 md:right-3 sm:right-2 right-1 top-1/2 translate-y-[-50%] rounded-full bg-white hover:bg-[#0FE1C2] transition-all duration-300 cursor-pointer !flex justify-center items-center`}
      onClick={onClick}
    >
      <HiChevronRight/>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} border-[3px] border-[#0FE1C2]  text-3xl text-[#0FE1C2] hover:text-white w-[64px] h-[64px] absolute lg:left-5 md:lrft-3 sm:left-2 left-1 top-1/2 translate-y-[-50%] rounded-full bg-white hover:bg-[#0FE1C2] transition-all duration-300 cursor-pointer !flex justify-center items-center`}
      onClick={onClick}
    >
      <HiChevronLeft />
    </div>
  );

}
const Projects = () => {
  
  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

    
  return (
    <div>
        <Container className="pb-[100px]">
        <Tittle text="My Projects" />
        <div className="relative">
        <div className="slider-container relative">
      <Slider {...settings}>
        <div className='relative'>
          <div className="flex flex-wrap justify-between gap-20 px-12">
          <Link target='_blank' to="https://orebi-sable.vercel.app"><img src={Project_1} alt="" /></Link>
          <Link target='_blank' to="https://agenc.vercel.app"><img src={Project_2} alt="" /></Link>
          <Link target='_blank' to="https://number-game-tahmid.vercel.app/"><img src={Project_3} alt="" /></Link>
          <Link target='_blank' to="https://todo-list-2-beta.vercel.app/"><img src={Project_4} alt="" /></Link>
          </div>
        </div>
        <div>
        <div className="flex flex-wrap justify-between gap-20 px-12">
          <Link target='_blank' to="https://bmi-tahmid.vercel.app/"><img src={Project_5} alt="" /></Link>
          <Link target='_blank'><img src={Project_6} alt="" /></Link>
          <Link target='_blank'><img src={Project_7} alt="" /></Link>
          <Link target='_blank' to="https://tahmid-funproject.vercel.app/"><img src={Project_8} alt="" /></Link>
          </div>
        </div>
        </Slider>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Projects