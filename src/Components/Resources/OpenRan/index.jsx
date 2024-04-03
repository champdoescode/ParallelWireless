import React from 'react'
import ResourcesNav from '../ResourcesNav'
import WhitePapersGrid from '../WhitePapers/WhitePapersGrid'
import Footer from '../../Footer'
import OpenRanHeading from './OpenRanHeading'
import OpenRanMainGrid from './OpenRanMainGrid'

const OpenRan = () => {
  return (
    <>
    <div className='openranBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Open RAN</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav
                
                title='WHITE PAPERS'
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
              className='bg-orange-600 text-white'
                title='OPEN RAN'
              />
            </div>
            
        </div>   
       <OpenRanMainGrid/>
        
        <Footer/>
   </>
  )
}

export default OpenRan