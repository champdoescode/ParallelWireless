import React from 'react'
import ResourcesNav from '../../Resources/ResourcesNav'
import WhitePapersGrid from '../../Resources/WhitePapers/WhitePapersGrid'
import Footer from '../../Footer'
import OurProducts from '../../OurProducts'
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

const Urban = () => {
  return (
    <>
      <div className='urbanBackground'></div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Urban Solutions</div>
            <div className='bg-gray-100 text-center flex justify-center flex-col sm:flex-col md:flex-row lg:flex-row'>
              <ResourcesNav
                className='bg-orange-600 text-white'
                title='URBAN'
              />
              <ResourcesNav
                title='RURAL'
              />
              <ResourcesNav
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
                <div className="full-width">
  <div className="container wysiwyg my-16"> <h2 className="text-4xl my-4">Features and Capabilities</h2>
<p>Our Urban Solution is an agile, software-based approach to RAN infrastructure, which is designed to allow MNOs to quickly deploy network upgrades at a lower TCO. The following describes the features and benefits of our state-of-the-art Urban Solution:</p>
<ul>
<li><strong>Innovate –</strong> Proprietary interfaces and limited flexibility with legacy suppliers make it challenging for MNOs to maintain, expand, and upgrade their networks to meet future demands. With our Parallel Wireless Urban solution, MNOs can avoid vendor lock-in, scale and enable new innovative services seamlessly with cloud-native centralized tools such as Continuous Integration/Continuous Delivery (CI/CD), DevOps, Artificial Intelligence (AI) and Machine Learning (ML).</li>
<li><strong>Futureproof for 5G –</strong> MNOs need to upgrade their networks to prepare for the explosive data demands such as Internet of Things (IoT), Industry 4.0, autonomous driving, and digital health. With our Urban solution MNOs can upgrade their networks to any G with a commercial-off-the-shelf (COTS) vBBU which is easy to install, has open interfaces and supports a broad ecosystem of vendors across 2G, 3G, 4G and 5G, preparing networks for the future.<br/>
Easy to install, modernize and expand networks – The costs to deploy and maintain networks and the lack of interoperability can be daunting as many operators are supporting 2G voice while migrating to 4G data and preparing for the greater bandwidth possibilities of 5G. Easily change and upgrade technologies to support emerging needs with our cloud-native software-based solution.</li>
<li><strong>Reduce Total Cost of Ownership (TCO) –</strong> Network Operations Center (NOC), zoning and permits, management services, power and backhaul, are a few of the many expenses required to maintain and upgrade networks. A cloud-native, software-defined architecture with state-of-the art features such as RAN automation, self-configuration, hands free software testing, integration and delivery drives down costs and improves interoperability. A container based DU/CU implementation across ALL Gs, enables faster time-to-market for new services and features enabling OPEX and CAPEX savings.</li>
<li><strong>Enhance end user experience –</strong> MNOs need to deliver a high quality and consistent experience everywhere, and all times, including during peak usage hours in high-capacity urban environments. Artificial Intelligence (AI) and Machine Learning (ML) enable seamless software upgrades utilizing data to optimize network performance in urban environments, delivering optimal subscriber throughput and quality of service. With open non-proprietary interfaces, the Parallel Wireless Urban Solution addresses network overloads during high peak hours, ensuring ubiquitous coverage, enabling state-of-the-art applications such as IoT, and exceeding customer expectations.</li>
</ul>
 </div>
</div>

            </div>

        </div>
        <OurProducts products={products} />
        
        <Footer/>
    </>
  )
}

export default Urban