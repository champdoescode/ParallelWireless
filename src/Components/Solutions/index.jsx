import React from 'react'
import Footer from '../Footer'
import ButtonColorChange from '../ButtonColorChange'
import ButtonDefault from '../ButtonDefault'
import ButtonHover from '../ButtonHover'
import Grid from './Grid'
import GridCombine from './GridCombine'
import Cloud from './Cloud'

const solution =[
    {
        heading: "Rural",
        description: "Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.",
        btn: "Learn More",
        img: "./SolutionImg/s1.jpg"
    },
   
]
const solution2 =[
    {
        heading: "Urban",
        description: "Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.",
        btn: "Learn More",
        img: "./SolutionImg/s1.jpg"
    },
]

const Solutions = () => {
  return (
    <>
    <div className='solutionBackground'>
        
    </div>
    <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Solution</div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                <div className='text-4xl text-center'>Reimagine Your Network.</div>
                <div className='text-4xl text-center'>Reimagine Your Economics</div>
                    <div className='text-xl text-center mt-8'>Parallel Wireless created world’s only 5G 4G 3G 2G <span><ButtonHover heading='OpenRAN'/></span> architecture to make delivery of wireless <span><ButtonHover heading='coverage'/></span> or
                    <span><ButtonHover heading='capacity'/></span> use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across five key domains – RAN, <span><ButtonHover heading='Edge'/></span>, Core, 
                    <span><ButtonHover heading='Orchestration'/></span> and <span><ButtonHover heading='Analytics'/></span> – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world. The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity,
                     increase operational efficiency, find new revenue streams and start deploying multi-vendor <span><ButtonHover heading='5G Networks'/></span> today.</div>
                </div>
            </div>
    </div>
    <GridCombine solution={solution} solution2={solution2} />
    <Cloud/>
    
    

    <Footer/>
    </>
  )
}

export default Solutions