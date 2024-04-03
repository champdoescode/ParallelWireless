import React from 'react'
import Grid from '../../../Solutions/Grid'

const WhoWeAreGrid = () => {
  return (
    <>
        <div className='w-full flex justify-center'>
        <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='grid-items order-2 sm:order-2 md:order-1 lg:order-1 flex flex-col justify-center items-center'>
                       <Grid
                       heading='Vision and Mission' 
                       description='Our mission since day one has been to help global mobile operators to reimagine their networks through Parallel Wireless’s unified ALL G cloud- native OpenRAN architecture and the world’s first and largest OpenRAN ecosystem by delivering substantial cost savings to their end users and industries.'
                       btn='Learn More'
                       />
                    </div>
                    <div className='grid-items order-1 sm:order-1 md:order-2 lg:order-2'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/missionandvision.jpg" alt="" />

                    </div>
                    <div className='grid-items order-3 sm:order-3 md:order-3 lg:order-3'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/sw-wave-585x415-1.jpg" alt="" />

                    </div>
                    <div className='grid-items order-4 sm:order-4 md:order-4 lg:order-4 flex flex-col justify-center items-center'>
                       <Grid 
                       heading='Reimagine Your Network. Reimagine Your Economics' 
                       description='Our software-defined fully compliant and interoperable OpenRAN architecture was designed from the ground up to reduce complexity and drive out cost from every aspect from the RAN to the Core. We pride ourselves on offering a fully automated outdoor or indoor coverage and capacity solutions that are easy and cost-effective to deploy and maintain and are software upgradable to 5G.'
                       btn='Learn More'
                       />
                    </div>
                    <div className='grid-items order-6 sm:order-6 md:order-5 lg:order-5 flex flex-col justify-center items-center'>
                       <Grid 
                       heading='Reimaginers Wanted!' 
                       description='People come to work at Parallel Wireless because they are inspired with our vision to reimagine telecom industry. They stay, because they are motivated by an incredible technology and team and are inspired every day by making a difference. We take pride in our commitment to employee growth, and our culture is built on atmosphere of empowerment, trust, integrity, respect, and open communication. We have assembled an amazing team that helped us to get deployed in over 60 global networks and are looking to expand the team to continue our industry disruption.'
                       btn='Reimagine Cellular Networks with Us'
                       />
                    </div>
                    <div className='grid-items order-5 sm:order-5 md:order-6 lg:order-6'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg" alt="" />

                    </div>
                    
                    
                    
                </div>
        </div>
    </div>
    </>
  )
}

export default WhoWeAreGrid