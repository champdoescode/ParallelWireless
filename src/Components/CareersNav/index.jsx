import React from 'react'
import WhoWeAreGrid from '../Company/WhoWeAre/WhoWeAreGrid'
import CareersNavGrid from './CareersNavGrid'
import Footer from '../Footer'
import ButtonDefault from '../ButtonDefault'
import Grid from '../Solutions/Grid'
import OurQualities from '../OurQualities'
import ButtonHover from '../ButtonHover'
import CareersSlider from './CareersSlider'
const qualities=[
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-EmployeeProgram-350x295.png",
    heading: "Employee Programs",
    description: "Our programs are global but delivered regionally ensuring every employee receives a tailored, individual development plan to get you to be the best version of yourself. We celebrate our wins with recognition (Spot Awards) and time off to give back to your community.",
  },
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-ComprehensiveBenefits-350x295.jpg",
    heading: "Comprehensive Benefits",
    description: "Our benefits are competitive and designed to foster and encourage good health, peace of mind, and long- term financial security for our team members around the globe.",
    
  },
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/PW-CareersPage-GrowthLifesytle-large-350x295.jpg",
    heading: "Growth and Lifestyle",
    description: "We support you with everything from flexible/remote working arrangements, a comprehensive global mobility program to support your career growth, and paid time off so you have time to rest and recharge!",
    
  },
]

const CareersNav = () => {
  return (
    <>
      
        <div className=' w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Careers at Parallel Wireless</div>
            
        </div>
        <div className='mt-16'></div>
        <CareersNavGrid/>
        <div className='w-full flex justify-center border my-8'>
          <div className='w-11/12'>
            <div className='flex justify-center  pt-16 pb-8'>
              <ButtonDefault heading='EXPLORE OPPORTUNITIES' />
            </div>
            <div className='border  border-orange-600 my-8'></div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-16'>

                <div className='grid-items order-3 sm:order-3 md:order-3 lg:order-3'>
                            <img className='w-full' src="https://www.parallelwireless.com/wp-content/uploads/people-first-720x510-1.jpg" alt="" />

                        </div>
                        <div className='grid-items order-4 sm:order-4 md:order-4 lg:order-4 flex flex-col justify-center items-center'>
                          <Grid 
                          heading='Parallel Wireless delivers on a People First Strategy' 
                          description='Our team members are essential to making Parallel Wireless an innovative technology leader! Our competitive total rewards package and long-term wealth creation opportunity are unmatched in the industry. Professionals at Parallel Wireless are provided with rapid career growth opportunities to reach their full potential and make a strong lasting impact within the Parallel Wireless community. Parallel Wireless provides challenging assignments, strong growth opportunities in a supportive culture that fosters teamwork and collaboration while encouraging innovation and break through ideas supported by the leadership team who are vested in your success, a concept we call Servant Leadership.'
                          />
                  </div>
            </div>
            
          </div>
        </div>
          <div>

          <OurQualities qualities={qualities}/>
          </div>
          <div className='border border-gray-50 my-4'></div>
          <div className='w-full flex justify-center'>
            <div className='w-3/4'>

              <div className='text-center text-3xl'>Our team is “All In” and vested to achieve amazing growth as we transform the wireless broadband industry.</div>
              <div className='flex justify-center py-4'>
                <ButtonHover heading='Join Us!' />
              </div>
              <div className='border  border-orange-600 my-8'></div>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16 gap-8'>

                    <div className='grid-items'>
                      <div className='text-4xl text-center'>OUR VISION</div>
                      <div className='text-xl text-center mt-2'>To reimagine the wireless network so all people can be connected whenever, wherever, and however they choose.</div>

                    </div>
                    <div className='grid-items'>
                      <div className='text-4xl text-center'>OUR MISSION</div>
                      <div className='text-xl text-center mt-2'>To deliver innovative products that unlock value and disrupt the economics of wireless networks through intelligence and openness. Our customers’ success is our success.</div>

                    </div>
              </div>
            </div>
          </div>
          <CareersSlider/>
        <Footer/>
    </>
  )
}

export default CareersNav