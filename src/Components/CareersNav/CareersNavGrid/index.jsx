import React from 'react'
import Grid from '../../Solutions/Grid'

const CareersNavGrid = () => {
  return (
    <>
        <div className='w-full flex justify-center'>
        <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='grid-items order-2 sm:order-2 md:order-1 lg:order-1 flex flex-col justify-center items-center'>
                       <Grid
                       heading='We’re disrupting, challenging, and leading the future of telecommunications.' 
                       description='Parallel Wireless is making a big difference for Mobile Network Operators (MNOs) across the globe as they move toward a secure, cloud-enabled, digital future built on Open RAN technology, and our teams from around the world are all in. There’s no better time to join Parallel Wireless to lead the disruption in wireless networks and propel your future.'
                       
                       />
                    </div>
                    <div className='grid-items order-1 sm:order-1 md:order-2 lg:order-2'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Disrupting.jpg" alt="" />

                    </div>
                    <div className='grid-items order-3 sm:order-3 md:order-3 lg:order-3'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-Technology.jpg" alt="" />

                    </div>
                    <div className='grid-items order-4 sm:order-4 md:order-4 lg:order-4 flex flex-col justify-center items-center'>
                       <Grid 
                       heading='Technology that delivers wireless connectivity, so all people can be connected whenever, wherever, and however they choose.' 
                       description='At Parallel Wireless, you’ll have a unique opportunity to reimagine the boundaries of what’s possible in telecommunications. As part of the Open RAN movement, you’ll help develop innovative products and solutions by leveraging open interfaces, thus enabling cost-effective, agile, and scalable mobile networks from 2G, 3G and 4G to 5G and beyond.'
                       />
                    </div>
                    <div className='grid-items order-6 sm:order-6 md:order-5 lg:order-5 flex flex-col justify-center items-center'>
                       <Grid 
                       heading='We Are #TeamParallelWireless' 
                       description='What do we value most? Our people, our technology, and reimagining the world – together. You’ll be part of a team, all driven to go beyond the status quo to reimagine what comes next. This is the #TeamParallelWireless story, and we’re just getting started.'
                       />
                    </div>
                    <div className='grid-items order-5 sm:order-5 md:order-6 lg:order-6'>
                        <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2023-12-17-at-13.57.21-585x415.jpeg" alt="" />

                    </div>
                    
                    
                    
                </div>
        </div>
    </div>
    </>
  )
}

export default CareersNavGrid