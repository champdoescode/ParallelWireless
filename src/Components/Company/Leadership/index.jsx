import React from 'react'
import ButtonHover from '../../ButtonHover'
import LeadersFeature from './LeadersFeature'
import LeadersGrid from './LeadersGrid'
import Footer from '../../Footer'

const leaders = [
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Baruch-N_rnd.png',
        name: 'Baruch Navon',
        post: 'President and COO',
        level: ''
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Sean-Falvey.png',
        name: 'Sean Falvey',
        post: 'Chief Financial',
        level: 'Officer'
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/matt-1.png',
        name: 'Matt Rowe',
        post: 'Chief Legal Officer',
        level: ''
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Netanel-Gabizon.png',
        name: 'Netanel Gabizon',
        post: 'Chief Product',
        level: 'Officer'
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/yisrael.png',
        name: 'Yisrael Nov',
        post: 'EVP, Worldwide',
        level: 'Sales'
    },
    
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Eyal-Sitruk.png',
        name: 'Eyal Sitruk',
        post: 'EVP, Head of R&D',
        level: ''
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Anand-Bhaskarwar.png',
        name: 'Anand Bhaskarwar',
        post: 'EVP, Professional',
        level: 'Services'
    },
    {
        img: 'https://www.parallelwireless.com/wp-content/uploads/Mary-Kay_Rnd.png',
        name: 'Mary Kay Peacock',
        post: 'Chief of Staff',
        level: 'Sales'
    },
]

const Leadership = () => {
  return (
    <>
        <div className='text-center text-4xl py-8 border bg-gray-100'>LEADERSHIP</div>
        <div className='w-full flex justify-center bg-gray-100'>
            <div className='w-11/12'>
                <div className='flex justify-center items-center'>
                        <div>
                            <img className='h-40' src="https://www.parallelwireless.com/wp-content/uploads/steve-papa-redux.png" alt="" />
                        </div>
                    <div className='my-16 ml-4'>

                        <div className='text-2xl'>
                            <div className='font-bold'>Steve Papa</div>
                            <div className='text-gray-500'>CEO & Chairman</div>
                            <div className='text-gray-500'>Co-Founder</div>
                        </div>
                        <div className='flex'>
                            <div className='border-r pr-4 mr-4 border-black'> <ButtonHover heading='IN'/> </div>
                            <div> <ButtonHover heading='bio'/> </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div>
                    <LeadersGrid leaders = {leaders}/>
                </div>
                
            </div>

        </div>
        <Footer></Footer>
    </>
  )
}

export default Leadership