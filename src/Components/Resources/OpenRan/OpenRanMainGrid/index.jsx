import React from 'react'
import OpenRanHeading from '../OpenRanHeading'
import WhitePapersGrid from '../../WhitePapers/WhitePapersGrid'

const OpenRanMainGrid = () => {
  return (
    <>
       <OpenRanHeading heading='Open RAN Frequently Asked Questions'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='Parallel Wireless Open RAN FAQs'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='Parallel Wireless E-Book'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='Open Ran Fact Book 2021'/>
                    <WhitePapersGrid heading='Parallel Wireless e-Book: Everything You Need to Know about Open Ran'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='TIP Playbook'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='Parallel Wireless 2G 3G 4G Open RAN Showcased in Telecom Infra Project Playbook'/>
                </div>
            </div>
        </div>
       
        <OpenRanHeading heading='Open RAN 101 Series'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='OpenRAN: Why, What, How, When'/>
                    <WhitePapersGrid heading='Open RAN Functional Splits Explained'/>
                    <WhitePapersGrid heading='A Timeline of OpenRAN Journey in the Industy'/>
                    <WhitePapersGrid heading='Integration and Beyound'/>
                    <WhitePapersGrid heading='Role of RAN Intelligent Controller'/>
                    <WhitePapersGrid heading='OpenRAN Adoption in the Different Regions'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='Open RAN Educational Blogs'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='OpenRAN: Why, What, How, When'/>
                    <WhitePapersGrid heading='Open RAN Functional Splits Explained'/>
                    <WhitePapersGrid heading='A Timeline of OpenRAN Journey in the Industy'/>
                    <WhitePapersGrid heading='Integration and Beyound'/>
                    <WhitePapersGrid heading='Role of RAN Intelligent Controller'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='Open RAN Webinars'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='Webinar Series: Part 1 - Overview'/>
                    <WhitePapersGrid heading='Webinar Series: Part 2 - All G OpenRAN'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='Open RAN Whitepapers'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                    <WhitePapersGrid heading='Parallel Wireless Creates OpenRAN “ALL G” Radio Access Network Architecture'/>
                    <WhitePapersGrid heading='An Overview of Key Open RAN Groups'/>
                </div>
            </div>
        </div>
        <OpenRanHeading heading='Open RAN Videos'/>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12'>
                <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center'>
                <WhitePapersGrid heading='OpenRAN: Why, What, How, When'/>
                    <WhitePapersGrid heading='Open RAN Functional Splits Explained'/>
                    <WhitePapersGrid heading='A Timeline of OpenRAN Journey in the Industy'/>
                    <WhitePapersGrid heading='Integration and Beyound'/>
                    <WhitePapersGrid heading='Role of RAN Intelligent Controller'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default OpenRanMainGrid