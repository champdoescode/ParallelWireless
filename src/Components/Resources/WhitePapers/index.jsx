import React from 'react'
import ResourcesNav from '../ResourcesNav'
import WhitePapersGrid from './WhitePapersGrid'
import Footer from '../../Footer'


const WhitePapers = () => {
    
  return (
    <>
        <div className='whitepapersBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>White Papers</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav
                className='bg-orange-600 text-white'
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
                title='OPEN RAN'
              />
            </div>
            
        </div>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>

                    <WhitePapersGrid heading='5G NR Logical Architecture and its Functional Splits'/>
                    <WhitePapersGrid heading='Tackling Nework Densification Challenges for 5G PDF'/>
                    <WhitePapersGrid heading='Open RAN Integration : Run With It'/>
                    <WhitePapersGrid heading='Parallel Wireless Creates OpenRAN "ALL G" Radio Acces Network Architecture'/>
                    <WhitePapersGrid heading='Cloud Native Application 101'/>
                    <WhitePapersGrid heading='5G Functional Splits'/>
                
                
                
                
                </div>

            </div>

        </div>
        <Footer/>

    </>
  )
}

export default WhitePapers