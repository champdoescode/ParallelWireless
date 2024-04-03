import React from 'react'
import ButtonHover from '../../ButtonHover'

const Telefonica = () => {
  return (
    <>
        <div className='w-full flex justify-center'>
            <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='grid-items order-2 sm:order-2 md:order-1 lg:order-1 flex flex-col justify-center items-center'>
                        <div className='text-4xl '>Telefonica Case Study</div>
                        <div className='text-xl '>Parallel Wireless Helps New Operator Mayutel to Build 3G/4G Open RAN Network in 3 Months Through Partnership with Telefonica.</div>
                        <div>
                            <ButtonHover heading='Download Case Study' />
                        </div>
                    </div>
                    <div className='grid-items order-1 sm:order-1 md:order-2 lg:order-2'>
                        <img className='w-full' src="./CustomersImg/4g.jpg" alt="" />

                    </div>
                    
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Telefonica