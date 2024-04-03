import React from 'react'

const ContactInfoFeature = (props) => {
  return (
    <div>
        <div className='text-3xl mb-2'>Contact Info :</div>
        <div className='text-xl text-gray-700'>{props.address}</div>
        <div className='flex my-4'>
            <div className='font-bold text-xl'>Phone:</div>
            <div className='text-gray-700 text-xl ml-2'>{props.phone}</div>
        </div>
    </div>
  )
}

export default ContactInfoFeature