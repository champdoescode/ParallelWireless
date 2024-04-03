import React from 'react'
import ResourcesNav from '../ResourcesNav'
import WhitePapersGrid from '../WhitePapers/WhitePapersGrid'
import Footer from '../../Footer'
import ButtonBlackToOrange from '../../ButtonBlackToOrange'
import { NavLink } from 'react-router-dom'
import WebinarSeriesGrid from './WebinarSeriesGrid'
import ButtonHover from '../../ButtonHover'
import PartnerWebinars from './PartnerWebinars'

const Webinars = () => {
  return (
    <>
        <div className='whitepapersBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Webinars</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav title='WHITE PAPERS' />
              <ResourcesNav title='SOLUTION OVERVIEWS' />
              <ResourcesNav title='VIDEOS' />
              <ResourcesNav title='BLOGS' />
              <ResourcesNav title='CASE STUDIES' />
              <ResourcesNav className='bg-orange-600 text-white' title='WEBINARS' />
              <ResourcesNav  title='OPEN RAN' />
            </div>
            
        </div>
        <div className='w-full flex justify-center border border-gray-50'>
            <div className='w-11/12'>
                <div className='text-xl text-center my-16'>Join our webinars, live or on-demand, to learn about our unified, cloud-native, software-based OpenRAN solutions and All G (5G, 4G, 3G, 2G) technologies.</div>
            </div>
        </div>
        <div className='w-full flex justify-center border border-gray-50'>
            <div className='w-11/12 flex justify-center mb-16 flex-col items-center'>
                <div className='text-4xl text-center my-16'>5G NSA vs SA: Calculating the right way forward.</div>
                <iframe className='w-[280px] h-[157px] sm:w-[280px] sm:h-[157px] md:w-[560px] lg:h-[315px] lg:w-[560px] lg:h-[315px] '   src="https://www.youtube.com/embed/jPxHvmyR57w?si=8qn6ymdY9kUsrz8d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div className='w-full flex justify-center border border-gray-50'>
            <div className='w-11/12 flex justify-center flex-col'>
                <div className='text-4xl text-center mt-16 mb-8'>Cloud-Native Webinar Series</div>
                <div className='border border-lime-500 w-full'></div>
                <WebinarSeriesGrid title='Cloud-Native Open RAN' image='https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Open-RAN-768x424.jpg' />
                <WebinarSeriesGrid title='Cloud-Native Applications 101' image='https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Applications-101-768x424.jpg' />
            <div className='mb-16'></div>
            </div>
        </div>
        <div className='w-full flex justify-center border border-gray-50'>
            <div className='w-11/12 flex justify-center flex-col'>
                <div className='text-4xl text-center mt-16 mb-8 text-gray-700'>Parallel Wireless OpenRAN Solutions Webinar Series</div>
                <div className='border border-lime-500 w-full'></div>
                <WebinarSeriesGrid title='On-Demand: Part 1 – Overview' image='https://www.parallelwireless.com/wp-content/uploads/OpenRAN-Webinar-Overview.jpg' />
                <WebinarSeriesGrid title='On-Demand: Part 2 – All G OpenRAN' image='https://www.parallelwireless.com/wp-content/uploads/All-G-Unified-OpenRAN-1.jpg' />
                <WebinarSeriesGrid title='On Demand: Part 3.1 – 5G Use Cases' image='https://www.parallelwireless.com/wp-content/uploads/Cover-Slide-v2.jpg' />
                <WebinarSeriesGrid title='On-Demand: Part 4 – Monetizing 5G' image='https://www.parallelwireless.com/wp-content/uploads/Monetizing-5G-600x338.jpg' />
                <div className='text-xl  mt-4 mb-8 text-gray-700'>Subscribe to our <span> <ButtonHover heading='BrightTalk channel'/> </span> and sign up for the remainder of the OpenRAN series as the sessions become available.</div>
            <div className='mb-16'></div>
            </div>
        </div>
        <PartnerWebinars/>
        <Footer/>
    </>
  )
}

export default Webinars