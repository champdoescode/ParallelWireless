import React from 'react'
import { NavLink } from 'react-router-dom'

const ResourcesNav = (props) => {
  const inputProps = {
    ...props.inputProps,
    className: ` px-5 py-5 flex text-sm hover:text-white hover:bg-orange-600 transition duration-500 ease-in-out ${props.className}`,
    to:`${props.link}`
  }
  return (
    <div className=''>
        {props.children ? props.children : <NavLink {...inputProps}   >{props.title}</NavLink>}
        
        
    </div>
    
  )
}

export default ResourcesNav