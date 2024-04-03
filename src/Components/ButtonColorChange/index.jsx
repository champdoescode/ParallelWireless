import React from 'react'

const ButtonColorChange = (props) => {
  return (
    <button className="transition duration-500 ease-in-out text-gray-800 text-lg font-semibold   hover:text-orange-600">
        {props.heading}
    </button>
  )
}

export default ButtonColorChange