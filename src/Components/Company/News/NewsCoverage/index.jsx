import React from 'react'
import ButtonDefault from '../../../ButtonDefault'
import NewCoverageGrid from '../NewsCoverageGrid'
import NewsCoverageGridFeature from '../NewsCoverageGridFeature'
import Footer from '../../../Footer'
const articles = [
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/logo-600x262.png",
        title: "The Future is All-G: Efficient networks will need to utilize the full range of cellular technologies",
        description: "While the industry is buzzing with discussion about the fantastic capabilities of 5G, for many carriers it still makes much more financial sense to deploy 2G and 4G networks, in other words introducing voice services to new rural areas with 2G/4G and delivering high-speed data in urban/dense areas with 4G. This will allow them to tier their offer in order to target a realistic ARPU while providing services that are truly in current demand.",

    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/telecmpaper-logo.png",
        title: "Brazil mobile operators take part in OpenRAN trial with Parallel",
        description: "Parallel Wireless has announced it is working with Brazil’s National Institute of Telecommunications (Inatel) on an OpenRAN field trial involving Telecom Infra Project (TIP) and four major Brazilian MNOs, namely Vivo, Claro, TIM and Brisanet.",

    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/Fast-Mode.png",
        title: "Parallel Wireless, TIP, Claro, TIM, Vivo & Others to Conduct Open RAN Field Trial in Brazil",
        description: "Parallel Wireless, the U.S.-based Open RAN leader delivering the world’s leading All G, cloud-native Open RAN solution, is partnering with Inatel, Telecom Infra Project (TIP), Brisanet, Claro, TIM, and Vivo to conduct a field trial enabling leading-edge 4G and 5G broadband communications throughout Brazil and other LATAM countries. ",

    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/RCR-Wireless-logo-600x450.png",
        title: "            Parallel Wireless partners with Brazilian carriers for O-RAN trial            ",
        description: "U.S.-based Open RAN company Parallel Wireless said it is partnering with Inatel, Telecom Infra Project (TIP), Brisanet, Claro, TIM, and Vivo to conduct a field trial enabling leading-edge 4G and 5G broadband communications throughout Brazil and other countries in Latin America.",
    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/capacitymedia-600x450.jpg",
        title: "Parallel Wireless and partners to conduct Open RAN field trial in Brazil",
        description: "Parallel Wireless is partnering with Inatel, Telecom Infra Project (TIP), Brisanet, Claro, TIM, and Vivo to conduct an Open RAN field trial in Brazil.",
    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/fierce-wireless-red-logo-600x280.jpg",
        title: "            Parallel Wireless fetes open RAN field trial in Brazil            ",
        description: "In Brazil, Parallel Wireless is working with four network operators – Vivo, Claro, TIM and Brisanet – on an open RAN field trial, along with Inatel – National Institute of Telecommunications in Brazil and the Telecom Infra Project (TIP).",
    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/Telecom-TV-logo-1.png",
        title: " What’s up with… TIM, Iliad, Oi, Parallel Wireless, SK Telecom",
        description: "It’s Telecom Italia day, it seems, as the Italian national operator is embroiled in all sorts of deals, changes and speculation, though there’s also some Open RAN and mobile M&A activity in Brazil and a metaverse-related investment for SK Telecom in South Korea.",
    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/Light-Reading-logo.png",
        title: "Rakuten’s Amin targets 25% of RAN market in bid to unseat giants            ",
        description: "The mobile antennas that adorn rural masts or dangle precipitously off high-rise buildings, like abseilers pre-descent, represent a multi-billion-dollar equipment industry.",
    },
    {
        image: "https://www.parallelwireless.com/wp-content/uploads/ee.png",
        title: "O-RAN technology demos at Mobile World Congress            ",
        description: "The O-RAN Alliance is highlighting 22 demonstrations of the latest open radio access network (O-RAN) technology at the Mobile World Congress this week in Barcelona, Spain, with a further 24 available online in a virtual exhibition.",
    },
]

const NewsCoverage = () => {
  return (
    <>
        <div className='newsBackground'></div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>In The News</div>
            <div className='flex justify-center py-8'>
                <div className='w-9/12'>
                    <div className='text-4xl text-center mt-8'>Articles</div>
                    
                </div>
            </div>
        </div>
        <NewsCoverageGridFeature articles={articles} />
        <div className='my-16 w-full flex justify-center'>
            <ButtonDefault heading='LOAD MORE' />
        </div>
        <Footer/>
        
        
    </>
  )
}

export default NewsCoverage