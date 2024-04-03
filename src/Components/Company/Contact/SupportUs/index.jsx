import React from 'react'
import ButtonDefault from '../../../ButtonDefault'
import Footer from '../../../Footer'

const SupportUs = () => {
  return (
    <>
        <div className='supportBackground'></div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Parallel Wireless Worldwide Support</div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                    <div className='text-xl text-center mt-8'>Parallel Wireless provides around-the-clock technical support services online and over the phone to all customers, partners, resellers, and distributors who hold valid Parallel Wireless service contracts.</div>
                    <div className='text-xl text-center mt-8'>Please have your User ID ready when you contact Parallel Wireless Support to prevent any delays with your support request.</div>
                    <div className='text-xl text-center font-bold mt-8'>Login here to open up your support ticket:</div>
                    <div className='text-xl text-center font-bold mt-8'>
                        <ButtonDefault heading='SUPPORT PORTAL'/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SupportUs