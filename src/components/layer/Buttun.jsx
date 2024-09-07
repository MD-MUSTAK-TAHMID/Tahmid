import React from 'react'
import { Link } from 'react-router-dom'

const Buttun = ({text,className,to}) => {
  return (
    <Link target='_blank' className={`${className} content-none inline-block lg:px-5 md:px-4 sm:px-3 px-2 lg:py-[18px] md:py-4 sm:py-3 py-2  md:border-2 border border-[#0FE1C2] md:rounded-[10px] rounded-md font-In text-[#FFFFFF] lg:text-[24px] md:text-xl sm:text-lg text-sm font-normal hover:bg-[#0FE1C2] hover:text-black hover:border-white transition-all duration-300`} to={to}>
        {text}
    </Link>
  )
}

export default Buttun