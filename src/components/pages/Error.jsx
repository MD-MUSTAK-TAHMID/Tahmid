import React from 'react'
import Image from '../../assets/Error.png'
import Buttun from '../layer/Buttun'

const Error = () => {
  return (
	<div className='flex flex-col gap-y-7 justify-center items-center py-14'>
		<img src={Image} className='' alt="" />
		<Buttun to="/" text="Go Back To main Menu"/>
	</div>
  )
}

export default Error