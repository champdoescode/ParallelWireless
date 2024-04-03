import React from 'react'
import { Facebook, Linkedin, Mail, X } from 'react-feather'
import ButtonHover from '../../../../ButtonHover'

const PressReleasesGrid = (props) => {
  return (
    <div>
        <div className=' my-2 flex justify-between items-center'>
            <div className='text-zinc-600'>{props.date}</div>
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
        </div>
        <div className='border w-full border-black'></div>
        <div className='font-bold text-5xl mt-8 mb-2 hover:underline'>{props.title}</div>
        <div className='text-3xl text-zinc-600 my-4'>{props.description}</div>
        <div className='mt-8 mb-4'> <ButtonHover heading='Read More'/> </div>
    </div>
  )
}

export default PressReleasesGrid