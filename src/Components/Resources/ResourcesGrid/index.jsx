import React from 'react'
import Grid from '../../Solutions/Grid'

const ResourcesGrid = () => {
  return (
    <div className='w-full flex justify-center'>
    <div className='w-11/12'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='grid-items order-2 sm:order-2 md:order-1 lg:order-1 flex flex-col justify-center items-center'>
                   <Grid 
                   heading='Solution Overviews' 
                   description='Learn more about Parallel Wireless 5G 4G 3G 2G coverage and capacity outdoor and indoor solutions by checking out our solution overview briefs and presentations.'
                   btn='Learn More'
                   />
                </div>
                <div className='grid-items order-1 sm:order-1 md:order-2 lg:order-2'>
                    <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/5g-img.jpg" alt="" />

                </div>
                <div className='grid-items order-3 sm:order-3 md:order-3 lg:order-3'>
                    <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/eNodeB-img.jpg" alt="" />

                </div>
                <div className='grid-items order-4 sm:order-4 md:order-4 lg:order-4 flex flex-col justify-center items-center'>
                   <Grid 
                   heading='Case Studies' 
                   description='See how we’ve helped customers all over the globe modernize their networks and reduce costs with our outdoor and indoor OpenRAN.'
                   btn='Learn More'
                   />
                </div>
                <div className='grid-items order-6 sm:order-6 md:order-5 lg:order-5 flex flex-col justify-center items-center'>
                   <Grid
                   heading='Customer Testimonial Videos' 
                   description='Hear it straight from our customers by watching our customer testimonial videos!'
                   btn='Watch More Here ->'
                   />
                </div>
                <div className='grid-items order-5 sm:order-5 md:order-6 lg:order-6'>
                    <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg" alt="" />

                </div>
                <div className='grid-items order-7 sm:order-7 md:order-7 lg:order-7'>
                    <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/city-img.jpg" alt="" />

                </div>
                <div className='grid-items order-8 sm:order-8 md:order-8 lg:order-8 flex flex-col justify-center items-center'>
                   <Grid 
                   heading='White Papers' 
                   description='Take a deeper dive into our 5G 4G 3G 2G cloud-native solutions with our white papers.'
                   btn='Download Now'
                   />
                </div>
                <div className='grid-items order-9 sm:order-9 md:order-8 lg:order-8 flex flex-col justify-center items-center'>
                   <Grid 
                   heading='Webinars' 
                   description='Our webinar program is a great way to learn about everything-Parallel as well as latest industry trends.'
                   btn='Watch Now'
                   />
                </div>
                <div className='grid-items order-8 sm:order-8 md:order-9 lg:order-9'>
                    <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/presentation-img.jpg" alt="" />

                </div>
                
                
            </div>
    </div>
</div>
  )
}

export default ResourcesGrid