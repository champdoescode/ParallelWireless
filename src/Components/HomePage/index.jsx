import React from 'react'
import HomeSlider from '../HomeSlider'
import OurQualities from '../OurQualities'
import PartnersSlider from '../PartnersSlider'
import Leardership from '../Leadership'
import Careers from '../Careers'
import CareerOptions from '../CareerOption'
import Awards from '../Awards'
import OurProducts from '../OurProducts'
import Footer from '../Footer'


const qualities=[
    {
      image: "./images/Grid1.jpg",
      heading: "Reimagine Coverage",
      description: "Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.",
      btn: "Learn More"
    },
    {
      image: "./images/Grid2.jpg",
      heading: "Reimagine Capacity",
      description: "Easy to install, low-cost and high-performing cloud-native Parallel Wireless Open RAN supports macro, Massive MIMO or small cell deployments for densification and delivers superior end user QoS for consumers and industries in urban scenarios.",
      btn: "Learn More"
    },
    {
      image: "./images/Grid3.jpg",
      heading: "Reimagine 5G and Beyond",
      description: "Parallel Wireless cloud-native ORAN approach enables any 5G migration option and is software upgradable to any future 3GPP releases delivering the most cost-effective, easy to deploy, and advanced 5G capabilities for all 5G use cases.",
      btn: "Learn More"
    },
  ]
  const features=[
    {
      image: "./images/l1.png",
      heading: "Our Leadership",
      description: "The Parallel Wireless leadership team has experience building many startup companies into leading industry players.",
      btn: "Our Leaders >"
    },
    {
      image: "./images/l2.png",
      heading: "Our People",
      description: "Reimaginers wanted. We have positions open across the globe. Join us.",
      btn: "Become a Reimaginer >"
    },
    {
      image: "./images/l3.png",
      heading: "Our Culture",
      description: "We are a fast-moving technology company that is ambitious about innovation and collaboration, and focused on our customers’ success.",
      btn: "Our Culture >"
    },
  ]
  const options=[
    {
      heading: "5G Starts Here",
      description: "Through open collaboration with OpenRAN ecosystem, we’ve created the world’s first and largest fully compliant OpenRAN portfolio that delivers the next generation of wireless infrastructure at a much lower cost, ensuring more equal access to 5G globally. Our software-defined and interoperable OpenRAN architecture was designed from the ground up to reduce complexity and drive out cost from every aspect from the RAN to the Core. We pride ourselves on offering a fully automated outdoor or indoor coverage and capacity solutions that are easy and cost-effective to deploy and maintain and are software upgradable to 5G.",
      btn: "Learn More"
    },
    {
      image: "./images/o1.jpg",
    },
    {
      image: "./images/o2.jpg",
      
    },
    {
      heading: "Reimagine Your Network",
      description: "Parallel Wireless created the world’s only ALL G (5G/4G/3G/2G) software-enabled OpenRAN architecture to make delivery of wireless coverage or capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G/4G/3G/2G and Wi-Fi cloud-native architecture that is open and standardized across five key domains – RAN, Edge, Core, Orchestration and Analytics – we are committed to the 5G vision of bringing Internet to every person and organization for a truly connected world at much lower cost to deploy and maintain.",
      btn: "Learn More"
      
    },
    {
      heading: "Reimagine Your Economics",
      description: "The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor 5G networks today. Software innovation and openness across 5G/4G/3G /2G and Wi-Fi coupled with network automation drives TCO reduction for low-density or high density use cases of up to 60% for CAPEX and 65% for OPEX.",
      btn: "Hear from Our Customers"
      
    },
    {
      image: "./images/o3.jpg",
      
    },
  ]
  const awards=[
    {
      image: "./images/a1.png",
      heading: "Upcoming Events",
      description: "Visit with us at upcoming tradeshows, conferences or attend our webinars to learn how we can help you reimagine your networks.",
      btn: "Connect with us at events >"
    },
    {
      image: "./images/a2.png",
      heading: "Awards",
      description: "We are honored and humbled to be recognized by the industry with awards for our innovation, technology vision and deployments.",
      btn: "Learn More >"
    },
    
  ]
  const products=[
    {
      image: "./images/pro1.png",
      heading: "Access: OpenRAN",
      description: "Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost.",
      btn: "Learn More"
    },
    {
      image: "./images/pro2.jpg",
      heading: "Network Software",
      description: "Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.",
      btn: "Learn More"
    },
    {
      image: "./images/pro3.jpg",
      heading: "Intelligence and Automation",
      description: "Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience.",
      btn: "Learn More"
    },
  ]
  
  


const HomePage = () => {
  return (
    <>
        <div>
            <HomeSlider/>
            <OurQualities qualities={qualities}/>
            <PartnersSlider/>
            <Leardership features={features} />
            <Careers/>
            <CareerOptions options={options} />
            <Awards awards={awards}/>
            <OurProducts products={products} />
            <Footer/>
        </div>
    </>
  )
}

export default HomePage