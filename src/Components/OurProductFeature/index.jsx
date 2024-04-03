import React from 'react'
import ButtonDefault from '../ButtonDefault'

const OurProductFeature = (props) => {
  return (
    <div className='grid-items border'>
        <div className=''>
            <img className='w-full' src={props.image} alt="" />
            <div className='text-3xl my-4 font-semibold p-4'>{props.heading}</div>
            <div className='text-xl p-4'>{props.description}</div>
            <div className='mt-8 p-4'>
                <ButtonDefault heading={props.btn}/>
            </div>
        </div>

    </div>
  )
}

export default OurProductFeature