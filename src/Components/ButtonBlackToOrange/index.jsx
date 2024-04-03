import React from 'react'

const ButtonBlackToOrange = (props) => {
  return (
    <button className="transition text-left duration-500 ease-in-out text-gray-800  font-semibold hover:underline text-3xl  hover:text-orange-600">
        {props.heading}
    </button>
  )
}

export default ButtonBlackToOrange