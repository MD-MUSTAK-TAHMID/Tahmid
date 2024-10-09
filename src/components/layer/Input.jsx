import React from 'react'

const Input = ({placeholder,className}) => {
  return (
    <input type="text" placeholder={placeholder} className={`w-[425px] py-[17px] px-5 bg-transparent border-[3px] rounded-[10px] border-[#D9D9D9] outline-none focus:border-[#0FE1C2] focus:placeholder:text-[#0FE1C2] placeholder:text-2xl placeholder:text-white text-white text-2xl ${className}`}/>
  )
}

export default Input