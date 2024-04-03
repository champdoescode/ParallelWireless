import React from 'react'
import ResourcesNav from './ResourcesNav'
import ResourcesGrid from './ResourcesGrid'
import Footer from '../Footer'

const Resources = () => {
  return (
    <>
       <div className='resourcesBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Resources</div>
            <div className='bg-gray-100  flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center'>
              <ResourcesNav
                title='WHITE PAPERS'
                link='/resources/white-papers'
              />
              <ResourcesNav
                title='SOLUTION OVERVIEWS'
              />
              <ResourcesNav
                title='VIDEOS'
              />
              <ResourcesNav
                title='BLOGS'
              />
              <ResourcesNav
                title='CASE STUDIES'
              />
              <ResourcesNav
                title='WEBINARS'
              />
              <ResourcesNav
                title='OPEN RAN'
              />
            </div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                <div className='text-4xl text-center'>Reimagine Your Network.</div>
                <div className='text-4xl text-center'>Reimagine Your Economics</div>
                    <div className='text-xl text-center mt-8'>In this asset library you’ll find solutions brochures, data sheets, recorded webinars, and customer videos and case studies to learn more about Parallel Wireless world’s leading 5G 4G 3G 2G OpenRAN.</div>
                </div>
            </div>
        </div>
        <ResourcesGrid/>
        <Footer/>
    </>
  )
}

export default Resources