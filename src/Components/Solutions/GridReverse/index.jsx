import React from 'react'
import ButtonHover from '../../ButtonHover'

const GridReverse = (props) => {
  return (
    <>
     
                <div className='grid-items'>
                        <img className='w-full' src={props.img} alt="" />
                    </div>
                    <div className='grid-items'>
                        <div className=''>
                            <div className='text-2xl'>{props.heading}</div>
                            <div className='text-2xl mb-8'>{props.description}</div>
                            <ButtonHover className='' heading={props.btn}/>
                        </div>
                </div>
    </>
      
  )
}

export default GridReverse