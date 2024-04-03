import React from 'react'
import ButtonBlackToOrange from '../../../ButtonBlackToOrange'
import { NavLink } from 'react-router-dom'

const PartnerWebinarsGrid = (props) => {
  return (
    <div>
        <div className='mt-10 mb-4'>
            <ButtonBlackToOrange heading={props.title} />
            <span className='text-3xl text-gray-600'>{props.hostedby}</span>
            <ButtonBlackToOrange heading={props.title2} />
        </div>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='grid-items'>
                <NavLink className='w-full flex justify-center items-center'>
                    <img className='w-full' src={props.image} alt="" />
                </NavLink>
            </div>
            <div className='grid-items'>
                <NavLink className='w-full flex '>
                    <img className='h-24' src={props.logo} alt="" />
                    <img className='h-24' src={props.logo2} alt="" />
                    <img className='h-24' src={props.logo3} alt="" />
                </NavLink>
            </div>

        </div>
        
    </div>
  )
}

export default PartnerWebinarsGrid