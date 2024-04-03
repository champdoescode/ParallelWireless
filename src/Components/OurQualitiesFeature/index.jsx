import React from 'react'
import ButtonHover from '../ButtonHover'

const OurQualitiesFeature = (props) => {
  return (
    <div className='grid-items'>
        <div className=''>
            <img className='w-full' src={props.image} alt="" />
            <div className='text-3xl my-4 font-semibold'>{props.heading}</div>
            <div className='text-xl'>{props.description}</div>
            <div className='mt-20'>
                <ButtonHover heading={props.btn}/>
            </div>
        </div>

    </div>
  )
}

export default OurQualitiesFeature