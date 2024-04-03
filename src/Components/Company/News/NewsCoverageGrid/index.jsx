import React from 'react'
import ButtonColorChange from '../../../ButtonColorChange'
import { Facebook, Linkedin, Mail, X } from 'react-feather'
import ButtonHover from '../../../ButtonHover'
import ButtonBlackToOrange from '../../../ButtonBlackToOrange'

const NewCoverageGrid = (props) => {
  return (
    <>
        <div className='grid-items'>
            <div className='w-full flex justify-center border p-8'>
                <img className='h-32 transition duration-300 ease-in-out hover:scale-110' src={props.image} alt="" />
            </div>
            <div className='my-4 flex'>
                <ButtonBlackToOrange heading={props.title} />
            </div>
            <div className='flex my-4'>

                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Facebook color='white' size={16}/>
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <X color='white' size={16} fill='white'/>
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Linkedin color='white' size={16} />
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Mail color='white' size={16}/>
                                
                            </div>
            </div>
            <div className='text-lg my-4'>
                {props.description}
            </div>
            <div className='my-4'><ButtonHover heading='Read More'/>  </div>
        </div>
    </>
  )
}

export default NewCoverageGrid