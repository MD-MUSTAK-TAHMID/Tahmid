import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"; // Ensure the logo path is correct
import { Link } from 'react-router-dom';
import Container from './layer/Container';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Close icon for mobile menu
import { CircularProgressbar } from 'react-circular-progressbar'; // Assuming it's being used elsewhere
import 'react-circular-progressbar/dist/styles.css';

const Navber = () => {
  let percentage = 30; // Assuming you'll use the CircularProgressbar somewhere else
  let [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShow(true); // Always show menu on larger screens
      } else {
        setShow(false); // Hide menu on mobile by default
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <nav className={show ? "bg-black py-7": "bg-gradient-to-l from-[#0FE1C2] py-5 shadow-md"}> {/* Slight background color for contrast */}
      <Container className="flex justify-between items-center relative">
        <div className="flex justify-between items-center w-full px-3 lg:px-0">
          {/* Logo Section */}
          <div className="logo">
            <Link to="/">
              <img data-aos="flip-up"   data-aos-duration="2000" className="w-[150px] lg:w-[200px]" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button onClick={toggleMenu} className="lg:hidden block text-[#262aff] text-[25px] focus:outline-none transition-all duration-300">
            {show ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className={`lg:flex lg:flex-nowrap flex-wrap lg:static absolute left-0 lg:bg-transparent bg-[#333333] w-full lg:w-auto top-[115%] lg:top-0 px-3 py-3 lg:py-0 justify-center items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 transition-all  duration-500 ease-in-out ${show ? 'block mb-5' : 'hidden'}`} data-aos="fade-left"   data-aos-duration="500">
          <li>
            <Link to="/" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              About
            </Link>
          </li>
          <li>
            <Link to="/Education" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Education
            </Link>
          </li>
          <li>
            <Link to="/Skills" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Certificates" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="text-[#f0f0f0] lg:text-lg text-base font-medium transition-all duration-300 hover:text-[#13F3A7] hover:font-bold hover:border-b-2 border-[#13F3A7] pb-[2px]">
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navber;
