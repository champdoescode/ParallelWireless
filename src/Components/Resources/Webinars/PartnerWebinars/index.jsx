import React from 'react'
import WebinarSeriesGrid from '../WebinarSeriesGrid'
import ButtonHover from '../../../ButtonHover'
import PartnerWebinarsGrid from '../PartnerWebinarsGrid'
import ButtonBlackToOrange from '../../../ButtonBlackToOrange'
import { NavLink } from 'react-router-dom'

const PartnerWebinars = () => {
  return (
    <div className='w-full flex justify-center border border-gray-50'>
            <div className='w-11/12 flex justify-center flex-col'>
                <div className='text-4xl mt-16 mb-8 text-gray-700'>Partner Webinars</div>
                <div className='border border-lime-500 w-full'></div>
                <PartnerWebinarsGrid
                 title='On-Demand: Changing the RAN Deployment Economics Paradigm with OpenRAN'
                 hostedby=' - Hosted By '
                 title2='Competitive Carriers Association'
                image='https://www.parallelwireless.com/wp-content/uploads/CCA-webinar-screen-cap.jpg'
                logo='https://www.parallelwireless.com/wp-content/uploads/CCA-logo.png' 
                />
                <PartnerWebinarsGrid
                 title='On-Demand: Changing the Mobile Networks Economics with Parallel Wireless OpenRAN'
                 hostedby=' - Hosted By '
                 title2='Intel Network Builders'
                image='https://www.parallelwireless.com/wp-content/uploads/Intel-Network-Builders-Webinar.jpg'
                logo='https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png' 
                />
                <PartnerWebinarsGrid
                 title='O-RAN Solution for 5G'
                 hostedby=' – Hosted by Supermicro, with Parallel Wireless and Intel '
                image='https://www.parallelwireless.com/wp-content/uploads/Supermicro-LP.jpg'
                logo='https://www.parallelwireless.com/wp-content/uploads/supermicro-logo-300x158.png' 
                logo2='https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png' 
                />
                <PartnerWebinarsGrid
                 title='Changing the Mobile Networks Economics with Parallel Wireless OpenRAN'
                 hostedby=' – Hosted by Russell Lundberg of '
                 title2='Cafetele'
                image='https://www.parallelwireless.com/wp-content/uploads/CafeTele-Webinar-_3_.png'
                logo='' 
                logo2='https://www.parallelwireless.com/wp-content/uploads/Logo-small-B.png' 
                />
                <PartnerWebinarsGrid
                 title='Exploring the Thriving Open RAN Ecosystem Deploying Mobile Networks Around the World'
                 hostedby=' - Hosted By '
                 title2='iGR Inc.'
                image='https://www.parallelwireless.com/wp-content/uploads/iGR-Webinar-Mavenir-Altiostar.png'
                logo='' 
                logo2='https://www.parallelwireless.com/wp-content/uploads/IGR-Logo.jpg' 
                />
                <div>
              <div className='mt-10 mb-4'>
                  <ButtonBlackToOrange heading='Changing the Mobile Networks Economics with Parallel Wireless OpenRAN' />
                  <span className='text-3xl text-gray-600'> - Hosted By </span>
                  <ButtonBlackToOrange heading='Competitive Carriers Association' />
              </div>
              <div className=' gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <NavLink className='w-full flex justify-center items-center'>
                          <img className='w-6/12' src="https://www.parallelwireless.com/wp-content/uploads/Partner-Webinars-2.jpg" alt="" />
                      </NavLink>
                  
                  
                      <NavLink className='w-full flex '>
                          <img className='h-24' src="https://www.parallelwireless.com/wp-content/uploads/CCA-logo.png" alt="" />
                      </NavLink>
                  

              </div>
        
    </div>
                
            </div>

        </div>
    
  )
}

export default PartnerWebinars