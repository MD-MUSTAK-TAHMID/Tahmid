import React from 'react';
import Container from '../layer/Container';
import Tittle from '../layer/Tittle';
import Slider from 'react-slick';
import Certificates1 from '../../assets/Tahmid Certeficate1.png';
import Certificates2 from '../../assets/Tahmid certifiate2.png';
import Certificates3 from '../../assets/Tahmid Certificate 3.png';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Icons for arrows

// Custom Previous Arrow
const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} border-[3px] border-[#0FE1C2] z-10 lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0FE1C2] hover:text-white lg:w-[64px]  md:w-[30px] sm:w-[24px] w-[20px]  lg:h-[64px] md:h-[30px] sm:h-[24px] h-[20px] absolute lg:left-[-70px] md:left-[-60px] sm:left-[-50px]  left-0 top-1/2 translate-y-[-50%] rounded-full bg-white hover:bg-[#0FE1C2] transition-all duration-300 cursor-pointer !flex justify-center items-center`}
      onClick={onClick}
    >
      <HiChevronLeft />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ className, onClick }) => {
  return (
    <div
      className={`${className} border-[3px] border-[#0FE1C2] z-10 text-3xl text-[#0FE1C2] hover:text-white lg:w-[64px]  md:w-[30px] sm:w-[24px] w-[20px]  lg:h-[64px] md:h-[30px] sm:h-[24px] h-[20px] absolute lg:right-[-70px] md:right-[-60px] sm:right-[-50px] right-0 top-1/2 translate-y-[-50%] rounded-full bg-white hover:bg-[#0FE1C2] transition-all duration-300 cursor-pointer !flex justify-center items-center`}
      onClick={onClick}
    >
      <HiChevronRight />
    </div>
  );
};

const Certificates = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite looping
    speed: 500, // Slide transition speed
    slidesToShow: 2, // Show 2 certificates per row
    slidesToScroll: 1, // Scroll one slide at a time
    rows: 2, // Show 2 rows
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2, // Show 2 certificates per row for medium screens
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 certificate per row for small screens
          rows: 1, // Show only one row for smaller screens
        },
      },
    ],
  };

  return (
    <div>
      <Container className="pb-[100px]">
        <Tittle text="My Certificates" />
        {/* Slider Container */}
        <Slider {...settings} className="mt-10">
          <div className="px-7 pb-7">
            <img src={Certificates1} alt="Certificate 1" className="w-full h-auto" />
          </div>
          <div className="px-7 pb-7">
            <img src={Certificates2} alt="Certificate 2" className="w-full h-auto" />
          </div>
          <div className="px-7 pb-7">
            <img src={Certificates3} alt="Certificate 3" className="w-full h-auto" />
          </div>
          <div className="px-7 pb-7">
            <img src={Certificates1} alt="Certificate 1" className="w-full h-auto" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Certificates;
