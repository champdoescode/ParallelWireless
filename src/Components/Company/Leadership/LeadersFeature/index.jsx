import React from 'react'
import LeadersGrid from '../LeadersGrid'
import ButtonHover from '../../../ButtonHover'

const LeadersFeature = (props) => {
  return (
    <>
        <div className='grid-items'>
         <div className='flex justify-center items-center'>
                        <div>
                            <img className='h-40' src={props.img} alt="" />
                        </div>
                    <div className='my-16 ml-4'>

                        <div className='text-2xl'>
                            <div className='font-bold'>{props.name}</div>
                            <div className='text-gray-500'>{props.post}</div>
                            <div className='text-gray-500'>{props.level}</div>
                        </div>
                        <div className='flex'>
                            <div className='border-r pr-4 mr-4 border-black'> <ButtonHover heading='IN'/> </div>
                            <div> <ButtonHover heading='bio'/> </div>
                            <div></div>
                        </div>
                    </div>
                </div>
        </div>  
        
    </>
  )
}

export default LeadersFeature