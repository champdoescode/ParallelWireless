import React from 'react'
import ResourcesNav from '../ResourcesNav'
import WhitePapersGrid from '../WhitePapers/WhitePapersGrid'
import Footer from '../../Footer'

const SolutionOverviews = () => {
  return (
    <>
        <div className='whitepapersBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Solution Overviews</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav
                
                title='WHITE PAPERS'
              />
              <ResourcesNav
                className='bg-orange-600 text-white'
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
            
        </div>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>

                    <WhitePapersGrid heading='Urban Macro Open RAN'/>
                    <WhitePapersGrid heading='2G Solution Overview'/>
                    <WhitePapersGrid heading='4G Solution Overview'/>
                    <WhitePapersGrid heading='5G Solution Overview'/>
                    <WhitePapersGrid heading='5G Ultra Dense Deployment Overview'/>
                    <WhitePapersGrid heading='OpenRAN Overview'/>
                    <WhitePapersGrid heading='OpenRAN Software Solution Overview'/>
                    <WhitePapersGrid heading='5G Functional Splits'/>
                    <WhitePapersGrid heading='Urban Macro Open RAN'/>
                    <WhitePapersGrid heading='2G Solution Overview'/>
                    <WhitePapersGrid heading='4G Solution Overview'/>
                    <WhitePapersGrid heading='5G Solution Overview'/>
                    <WhitePapersGrid heading='5G Ultra Dense Deployment Overview'/>
                    <WhitePapersGrid heading='OpenRAN Overview'/>
                    <WhitePapersGrid heading='OpenRAN Software Solution Overview'/>
                    <WhitePapersGrid heading='5G Functional Splits'/>
                    <WhitePapersGrid heading='5G Functional Splits'/>
                
                
                
                
                </div>

            </div>

        </div>
        <Footer/>
    </>
  )
}

export default SolutionOverviews