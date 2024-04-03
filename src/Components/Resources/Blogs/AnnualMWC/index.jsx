import React from 'react'
import ButtonDefault from '../../../ButtonDefault'

const AnnualMWC = () => {
  return (
    <div className='w-full flex justify-center bg-gray-200'>
        <div className='w-11/12'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8'>
                <div className='grid-items p-8'>
                    <div className='text-zinc-600'>03.14.24</div>
                    <div className='border w-10/12 border-black'></div>
                    <div className='font-bold text-4xl my-2'>Our Annual MWC Recap</div>
                    <div className='text-2xl w-8/12 text-zinc-600 my-4'>The Mobile World Congress in Barcelona is without a doubt the flagship event in our calendar, the…</div>
                    <div className='border w-10/12 border-black'></div>
                    <div className='mt-8 mb-4'> <ButtonDefault heading='CONTINUE READING'/> </div>
                </div>

                <div className='grid-items'>
                    <div>
                        <img src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-03-14-at-14.28.14.jpeg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AnnualMWC