import React from 'react'
import ButtonHover from '../ButtonHover'
import ButtonDefault from '../ButtonDefault'
import Footer from '../Footer'
import Telefonica from './Telefonica'

const Customers = () => {
  return (
    <>
        <div className='customersBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Customers</div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                <div className='text-4xl text-center'>Helping Reimagine Global Cellular Networks</div>
                    <div className='text-xl text-center mt-8'>Bringing together unified network software and OpenRAN hardware, we are the only US provider capable of delivering true end-to-end innovative solutions for 5G, 4G, 3G and 2G deployments globally, including complex mixed technology and multi-vendor scenarios at much lower cost. Parallel Wireless enabled the world’s largest Open RAN ecosystem and has been recognized by Vodafone and Telefonica as a best performing vendor.  Our customers include over 60 global mobile operators, as well as private and public industries and governments that use our software defined network portfolio to reimagine their networks. Our innovation has been recognized with 60+ <span><ButtonHover heading='industry awards' /></span>.</div>
                </div>
            </div>

    </div>
    <div className='flex justify-center items-center flex-col py-8 bg-gray-100'>
        <div className='text-4xl text-center mb-4'>Open RAN Integration: Run With It</div>
        <ButtonDefault heading='VIEW THE WHITE PAPER'/>
    </div>
    <div className='w-full flex justify-center my-16'>
        <div className='w-11/12'>
            <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 flex flex-wrap justify-center'>

                <div className='grid-items'>
                    <img className='h-16' src="./images/p1.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p2.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p3.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p4.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p5.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p6.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p8.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p9.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p10.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p11.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p12.png" alt="" />
                </div>
                <div className='grid-items'>
                    <img className='h-16' src="./images/p13.png" alt="" />
                </div>
            </div>

        </div>

    </div>
    <Telefonica/>
    <Footer/>
    </>
  )
}

export default Customers