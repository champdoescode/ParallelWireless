import React from 'react'
import ButtonDefault from '../ButtonDefault'

const Careers = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 my-20'>
        <div className='py-8'>

            <div className='text-3xl font-semibold tracking-widest text-center'>Careers</div>
            <div className='text-xl my-4 '>View our global openings and apply today to join the team.</div>
            <div className='flex justify-center '>
                <ButtonDefault heading="JOIN US" />
            </div>
        </div>

    </div>
  )
}

export default Careers