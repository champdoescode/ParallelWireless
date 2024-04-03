import React from 'react'
import ButtonBlackToOrange from '../../../ButtonBlackToOrange'
import { NavLink } from 'react-router-dom'

const WebinarSeriesGrid = (props) => {
  return (
    <div>
        <div className='my-4'>
            <ButtonBlackToOrange heading={props.title} />
        </div>
        <NavLink className='w-full flex justify-center items-center'>
            <img className='w-full p-2 sm:w-full md:w-6/12 lg:w-6/12' src={props.image} alt="" />
        </NavLink>
    </div>
  )
}

export default WebinarSeriesGrid