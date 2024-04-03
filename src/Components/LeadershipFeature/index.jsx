import React from 'react'
import ButtonHover from '../ButtonHover'

const LeardershipFeature = (props) => {
  return (
    <div className='grid-items'>
        <div className='flex flex-col justify-center items-center'>
            <img className='h-32 w-32' src={props.image} alt="" />
            <div className='text-3xl my-4 font-semibold text-center'>{props.heading}</div>
            <div className='text-xl text-center'>{props.description}</div>
            <div className='mt-16'>
                <ButtonHover heading={props.btn}/>
            </div>
        </div>

    </div>
  )
}

export default LeardershipFeature