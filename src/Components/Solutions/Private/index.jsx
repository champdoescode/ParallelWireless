import React from 'react'
import ResourcesNav from '../../Resources/ResourcesNav'
import OurProducts from '../../OurProducts'
import Footer from '../../Footer'
const products=[
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/product-4.jpg",
    heading: "Access: OpenRAN",
    description: "Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost.",
    btn: "Learn More"
  },
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/product-1.png",
    heading: "Network Software",
    description: "Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.",
    btn: "Learn More"
  },
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/product-2.png",
    heading: "Intelligence and Automation",
    description: "Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience.",
    btn: "Learn More"
  },
]

const PrivateLTE = () => {
  return (
    <>
      <div className='privateBackground'></div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Private LTE</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav
                title='URBAN'
              />
              <ResourcesNav
                title='RURAL'
              />
              <ResourcesNav
                className='bg-orange-600 text-white'
                title='PRIVATE LTE'
              />
             
            </div>
            
        </div>
        <div className='w-full flex justify-center my-16'>
            <div className='w-11/12 flex flex-col items-center'>
                <div className='text-center text-gray-700 text-xl w-9/12'>
                Parallel Wireless Private LTE solution provides global mobile operators with a new revenue generating opportunity for private and public enterprises in search to replace their legacy, hardware-centric networks with cloud-native, easy to deploy and maintain 4G/LTE solution. Parallel Wireless Private LTE network solution provides secure and reliable connectivity that covers every inch of operations, for humans and machines (IoT) and software-upgradable to 5G. Applicable for all industries, it provides the secure, reliable, flexible and cost-effective wireless connectivity that business- and mission-critical applications demand.
                </div>
                <div className='text-center text-gray-700 text-4xl w-9/12 my-6'>
                Expand and Modernize Your Networks
                </div>
                <div className='text-justify text-gray-700 text-xl w-9/12 my-6'>
                Our Urban Solution allows MNOs to expand and modernize their networks with an urban-ready, ALL G, Open RAN solution which is O-RAN Alliance compliant running on 7.2 radios. Our solution is easy to install, high-performing and reduces Total Cost of Ownership (TCO) while simplifying maintenance and enabling a broad ecosystem of partners.
                </div>
                <div>
                  <img src="https://www.parallelwireless.com/wp-content/uploads/Single-Cell-Urban_Infographic-02.jpg" alt="" />
                </div>
                

            </div>

        </div>
        <OurProducts products={products} />
        
        <Footer/>
    </>
  )
}

export default PrivateLTE