import React from 'react'
import ResourcesNav from '../ResourcesNav'
import Footer from '../../Footer'
import AnnualMWC from './AnnualMWC'
import MostRecentPost from './MostRecentPost'
import OtherBlogs from './OtherBlogs'

const details=[
    {
        image: 'https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-01-02-at-15.36.11.jpeg',
        date: '01.08.24',
        title: '5 Cellular Network Trends to Look Out for in 2024',
        description: 'Another year has gone by and even though the mobile telecoms industry is over 30 years old,…',
    },
    {
        image: 'https://www.parallelwireless.com/wp-content/uploads/Two-path-Banner.jpg',
        date: '12.07.23',
        title: 'Two paths on the way to 5G',
        description: 'Calculating your path forward   The agendas of the dozen or more telecom industry events that took…',
    },
    {
        image: 'https://www.parallelwireless.com/wp-content/uploads/transmision-power-control.png',
        date: '01.08.24',
        title: 'Control the power of your network – Power-saving software for your network',
        description: 'Much has been said of the power consumption of 5G networks. The expectations across the industry are…',
    },
]
const otherdetails=[
    {
        date: '01.08.24',
        title: '5 Cellular Network Trends to Look Out for in 2024',
        description: 'Another year has gone by and even though the mobile telecoms industry is over 30 years old,…',
    },
    {
        date: '12.07.23',
        title: 'Two paths on the way to 5G',
        description: 'Calculating your path forward   The agendas of the dozen or more telecom industry events that took…',
    },
    {
        date: '12.07.23',
        title: 'Two paths on the way to 5G',
        description: 'Calculating your path forward   The agendas of the dozen or more telecom industry events that took…',
    },
    {

        date: '01.08.24',
        title: 'Control the power of your network – Power-saving software for your network',
        description: 'Much has been said of the power consumption of 5G networks. The expectations across the industry are…',
    },
]

const Blogs = () => {
  return (
    <>
        
        <AnnualMWC/>
        <MostRecentPost details={details} />
        <div className='bg-gray-200 py-4'></div>
        <OtherBlogs otherdetails={otherdetails} />
        

        <Footer/>
    </>
  )
}

export default Blogs