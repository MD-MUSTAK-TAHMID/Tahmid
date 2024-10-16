import React from 'react'
import Image from '../../assets/Error.png'
import Buttun from '../layer/Buttun'
import Navbar from '../Navber'

const Error = () => {
  return (
	<div className="">
		<Navbar />
		<div className='flex flex-col gap-y-7 justify-center items-center py-14'>
		<img data-aos="fade-right"   data-aos-duration="2000" src={Image} className='' alt="" />
		<Buttun to="/" text="Go Back To main Menu"/>
	</div>
	</div>
  )
}

export default Error