import React from 'react'

const ButtonDefault = (props) => {
  return (
        <button className="transition duration-500 ease-in-out bg-orange-600 text-white border border-orange-600 px-6 py-2 rounded-xl hover:bg-white hover:text-orange-600">
            {props.heading}
        </button>
    
  )
}

export default ButtonDefault