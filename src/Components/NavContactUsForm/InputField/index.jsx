import React from 'react'

const InputField = (props) => {
    const inputProps = {
        ...props.inputProps,
        className: `remove-arrow w-full mt-2 border border-gray-400 h-14 focus:border-orange-500 outline-none p-2 ${props.className}`,
      }
  return (
    <div className='flex flex-col mt-8'>
                <label className='text-xl' htmlFor="">{props.label} <span className='text-red-400'>{props.star}</span></label>
        
                {props.children ? props.children : <input {...inputProps} required  />}
        
    </div>
  )
}

export default InputField