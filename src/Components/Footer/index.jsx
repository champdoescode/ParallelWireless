import React from 'react'
import { Facebook, Headphones, Linkedin, MapPin, X, Youtube } from 'react-feather'
import ButtonColorChange from '../ButtonColorChange'

const Footer = () => {
  return (
    <div className='w-full flex justify-center PartnerBackground'>
        <div className='w-11/12'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8'>
                <div className='grid-items'>
                     <div>
                        <img className='h-16' src="./images/logo.svg" alt="" />
                     </div>
                     <div className='my-16'>
                        <div>Follow Us</div>
                        <div className='flex'>

                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <X color='white' size={16}/>
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Linkedin color='white' size={16} fill='white'/>
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Facebook color='white' size={16} />
                                
                            </div>
                            <div className='bg-orange-600 rounded-full p-[8px] mr-2'>
                                <Youtube color='white' size={16}/>
                                
                            </div>
                        </div>
                     </div>
                </div>
                <div className='grid-items'>
                    <div className='text-3xl font-semibold'>Importend Links</div>
                    <div className='border border-black w-full mt-2'></div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
                        <div className='grid-items'><ButtonColorChange heading="Resources" /></div>
                        <div className='grid-items'><ButtonColorChange heading="About Us" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Leadership" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Solutions" /></div>
                        <div className='grid-items'><ButtonColorChange heading="News" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Technologies" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Contact" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Products" /></div>
                        <div className='grid-items'><ButtonColorChange heading="Careers" /></div>

                    </div>

                </div>
                <div className='grid-items'>
                    <div className='text-3xl font-semibold'>CONTACT US</div>
                    <div className='border border-black w-full mt-2'></div>
                    <div>
                        <div className='flex items-center my-4'>
                            <Headphones/>
                            <div className='ml-2'>1-603-589-9937</div>
                        </div>
                        <div className='flex items-center my-4 w-10/12'>
                            <MapPin size={30} />
                            <div className='ml-2'>300 Innovative Way, Suite #2310Nashua, NH 03062, USA</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='mb-16'>
                <div className='pl-4'>© 2024 Parallel Wireless. All rights reserved.</div>
                <div className='text-3xl lg:flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6'>
                    <div className='flex grid-items'><ButtonColorChange heading="Privacy Policy"/> <div className='hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full'></div></div>
                    <div className='flex grid-items'><ButtonColorChange heading="Legal"/> <div className='hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full'></div></div>
                    <div className='flex grid-items'><ButtonColorChange heading="Cookies"/> <div className='hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full'></div></div>
                    <div className='flex grid-items'><ButtonColorChange heading="Terms of Use"/> <div className='hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full'></div></div>
                    <div className='flex grid-items'><ButtonColorChange heading="Trademarks"/> <div className='hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full'></div></div>
                    <div className='flex grid-items'><ButtonColorChange heading="PO Terms & Condition"/></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer