import React from 'react'
import ButtonHover from '../../../ButtonHover'
import Footer from '../../../Footer'
import { NavLink } from 'react-router-dom'
import Vision from './Vision'

const MissionAndVision = () => {
  return (
    <>
    <div className=' w-full'>
        <div className='bg-slate-200/70 p-8 '>
                <div className='text-center text-5xl'>Mission and Vision</div>
            </div>
            
        </div>
        <div className='w-full justify-center flex bg-gray-50'>
            <div className='w-11/12 flex flex-col  items-center'>
                <div className='w-full text-center text-5xl text-white py-16 my-16 bg-orange-700'>
                OUR VISION, MISSION, AND VALUES
                </div>

                <div className='w-full flex justify-center'>
                    <NavLink className='pl-8 pr-32 pt-4  pb-8 bg-orange-600 text-white rounded-xl mx-8'>VISION
                    </NavLink>
                        
                    <NavLink className='pl-8 pr-32 pt-4 pb-8 bg-zinc-200 text-black rounded-xl mx-8'>MISSION</NavLink>
                    <NavLink className='pl-8 pr-32 pt-4 pb-8 bg-zinc-200 text-black rounded-xl mx-8'>VALUES</NavLink>
                </div>
                <div className='w-10/12 -mt-4'>

                    <Vision/>
                </div>
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default MissionAndVision