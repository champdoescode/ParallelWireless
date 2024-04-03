import React from 'react'

const ButtonHover = (props) => {
  return (
    <button className="transition duration-500 ease-in-out text-orange-600 text-xl font-semibold   hover:text-orange-300 hover:underline">
            {props.heading}
        </button>
  )
}

export default ButtonHover