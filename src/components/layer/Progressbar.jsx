import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
const Progressbar = ({text,persent}) => {
    let percentage = 70;
  return (
    <div className="w-[155px] h-[155px] flex flex-col">
    <CircularProgressbar  className='' value={percentage} text={`${percentage}%`} />
    <h4 className='text-white text-2xl mx-auto pt-4'>{text}</h4>
</div>
  )
}

export default Progressbar