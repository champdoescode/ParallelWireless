import React from 'react'
import ResourcesNav from '../ResourcesNav'
import WhitePapersGrid from '../WhitePapers/WhitePapersGrid'
import Footer from '../../Footer'

const CaseStudies = () => {
  return (
   <>
    <div className='whitepapersBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Case Studios</div>
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
                className='bg-orange-600 text-white'
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

                    <WhitePapersGrid heading='5G OpenRAN in the UK'/>
                    <WhitePapersGrid heading='BYOC Case Study'/>
                    <WhitePapersGrid heading='Inland Cellular Case Study'/>
                    <WhitePapersGrid heading='Mayutel Case Study'/>
                    <WhitePapersGrid heading='Optus Case Study'/>
                    <WhitePapersGrid heading='Telefonica Case Study'/>
                    <WhitePapersGrid heading='Tier 1 Case Study'/>
                    <WhitePapersGrid heading='Vodafone Case Study'/>
                
                
                
                
                </div>

            </div>

        </div>
        <Footer/>
   </>
  )
}

export default CaseStudies