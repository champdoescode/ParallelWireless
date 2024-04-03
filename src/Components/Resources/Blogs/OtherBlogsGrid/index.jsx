import React from 'react'
import ButtonHover from '../../../ButtonHover'

const OtherBlogsGrid = (props) => {
  return (
        <div>
            <img src={props.image} alt="" />
            <div className='text-zinc-600 my-2'>{props.date}</div>
            <div className='border w-full border-black'></div>
            <div className='font-bold text-3xl mt-8 mb-2'>{props.title}</div>
            <div className='text-xl text-zinc-600 my-4'>{props.description}</div>
            <div className='border w-full border-black'></div>
            <div className='mt-8 mb-4'> <ButtonHover heading='Read More'/> </div>
        </div>
  )
}

export default OtherBlogsGrid