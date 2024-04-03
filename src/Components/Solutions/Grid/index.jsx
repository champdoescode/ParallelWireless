import React from 'react'
import ButtonHover from '../../ButtonHover'

const Grid = (props) => {
  return (
    <>
        
            <div className='w-9/12'>
                <div className='text-3xl tracking-widest font-semibold'>{props.heading}</div>
                <div className='text-xl mb-8'>{props.description}</div>
                <ButtonHover className='' heading={props.btn}/>
            </div>
        
                
               
    </>

  )
}

export default Grid